import Link from 'next/link'
import SignupForm from '../components/SignupForm'

const Login = () => {
	return (
		<div className='absolute md:relative md:inset-0 h-screen w-full z-20 bg-[#191919] flex-[45%] flex items-center justify-center text-center px-5'>
			<div className='max-w-[370px] min-w-[280px]'>
				<div className='mb-20'>
					<h1 className='text-3xl font-medium'>Welcome</h1>
					<p className='text-base md:text-xl text-[#BABABAB2] opacity-70'>
						Welcome! Please enter your details.
					</p>
				</div>
				<SignupForm />
				<p className='mt-3 text-sm text-[#BABABAB2]'>
					Already have an account?{' '}
					<Link href='/login' className='text-[#3DD2CC] hover:underline'>
						login
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
