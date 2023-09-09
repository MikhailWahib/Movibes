'use client'

import { useRouter } from 'next/navigation'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required('Please enter your first name'),
	lastName: Yup.string().required('Please enter your last name'),
	email: Yup.string()
		.email('Please enter a valid email address')
		.required('Please enter your email'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Please enter your password'),
})

interface FormValues {
	firstName: string
	lastName: string
	email: string
	password: string
}

const SignupForm = () => {
	const [error, setError] = useState('')
	const router = useRouter()

	const initialValues: FormValues = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	}

	const handleSubmit = async (values: FormValues) => {
		try {
			const res = await fetch('api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				mode: 'same-origin',
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
			console.log(error)
		}
	}

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className='flex flex-col gap-4' noValidate>
					<div className='relative'>
						<Field
							autoFocus
							type='firstName'
							name='firstName'
							placeholder='First Name'
							className='w-full bg-transparent border-[#4D4B4B] border-b-[1px] p-2 outline-none focus:border-[#3DD2CC] transition-all'
						/>

						<ErrorMessage
							name='firstName'
							component='div'
							className='absolute text-red-500 text-sm'
						/>
					</div>
					<div className='relative'>
						<Field
							type='lastName'
							name='lastName'
							placeholder='Last Name'
							className='w-full bg-transparent border-[#4D4B4B] border-b-[1px] p-2 outline-none focus:border-[#3DD2CC] transition-all'
						/>

						<ErrorMessage
							name='lastName'
							component='div'
							className='absolute text-red-500 text-sm'
						/>
					</div>
					<div className='relative'>
						<Field
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
							<p className='absolute text-center w-full text-red-500'>
								{error}
							</p>
						) : null}
					</div>
					<button
						type='submit'
						className='h-14 mt-10 text-[#191919] text-xl font-semibold bg-[#FEFEFE] rounded-2xl transition-all hover:opacity-60'
					>
						Sign Up
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default SignupForm
