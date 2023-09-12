'use client'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'

const Login = () => {
	const router = useRouter()
	const { user } = useUser()
	console.log('🚀 ~ file: page.tsx:8 ~ Login ~ user:', user)

	if (user) {
		router.push('/')
		return null
	}

	return (
		<div className='h-screen w-full z-20 bg-[#191919] flex-[45%] flex items-center justify-center text-center px-5 md:relative md:inset-0'>
			<div className='relative max-w-[370px]'>
				<div className='mb-20'>
					<h1 className='text-3xl font-medium'>Welcome back</h1>
					<p className='text-base md:text-xl text-[#BABABAB2] opacity-70'>
						Welcome back! Please enter your details.
					</p>
				</div>
				<LoginForm />
				<p className='mt-3 text-sm text-[#BABABAB2]'>
					Don't have an account?{' '}
					<Link href='/signup' className='text-[#3DD2CC] hover:underline'>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
