import LoginForm from '../(components)/LoginForm'

const Login = () => {
	return (
		<div className='absolute h-screen w-full z-20 bg-[#191919] flex-[45%] flex items-center justify-center text-center px-5 md:relative md:inset-0'>
			<div className='max-w-[370px]'>
				<div className='mb-20'>
					<h1 className='text-3xl font-medium'>Welcome back</h1>
					<p className='text-base md:text-xl text-[#BABABAB2] opacity-70'>
						Welcome back! Please enter your details.
					</p>
				</div>
				<LoginForm />
			</div>
		</div>
	)
}

export default Login
