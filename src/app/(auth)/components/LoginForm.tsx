'use client'

import { useRouter } from 'next/navigation'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Please enter a valid email address')
		.required('Please enter your email'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Please enter your password'),
})

interface FormValues {
	email: string
	password: string
}

const LoginForm = () => {
	const [error, setError] = useState('')
	const router = useRouter()

	const initialValues: FormValues = { email: '', password: '' }

	const handleSubmit = async (
		values: FormValues,
		actions: FormikHelpers<FormValues>
	) => {
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/auth`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				mode: 'cors',
				credentials: 'include',
				body: JSON.stringify(values),
			})
			const userData = await res.json()
			if (res.ok) {
				localStorage.setItem('user', JSON.stringify(userData))
				router.push('/')
			} else {
				setError(userData.message)
			}
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			<Form className='flex flex-col gap-7' noValidate>
				<div className='relative'>
					<Field
						autoFocus
						type='email'
						name='email'
						placeholder='Email'
						className='w-full bg-transparent border-[#4D4B4B] border-b-[1px] p-2 outline-none focus:border-[#3DD2CC] transition-all'
					/>

					<ErrorMessage
						name='email'
						component='div'
						className='absolute text-red-500 text-sm'
					/>
				</div>

				<div className='relative'>
					<Field
						type='password'
						name='password'
						placeholder='Password'
						className='w-full bg-transparent border-[#4D4B4B] border-b-[1px] p-2 outline-none focus:border-[#3DD2CC] transition-all'
					/>

					<ErrorMessage
						name='password'
						component='div'
						className='absolute text-red-500 text-sm'
					/>
				</div>
				<div className='relative'>
					{error ? (
						<p className='absolute text-center w-full text-red-500'>{error}</p>
					) : null}
				</div>

				<button
					type='submit'
					className='h-14 mt-10 text-[#191919] text-xl font-semibold bg-[#FEFEFE] rounded-2xl transition-all hover:opacity-60'
				>
					Login
				</button>
			</Form>
		</Formik>
	)
}

export default LoginForm