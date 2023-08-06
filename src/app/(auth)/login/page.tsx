const Login = () => {
	return (
		<div className='flex-[45%] flex items-center justify-center h-screen text-center px-5'>
			<div>
				<div className='mb-20'>
					<h1 className='text-3xl font-medium'>Welcome back, Olivia</h1>
					<p className='text-xl text-[#BABABAB2] opacity-70'>
						Welcome back! Please enter your details.
					</p>
				</div>
				<form className='flex flex-col gap-7'>
					<input
						autoFocus
						type='email'
						placeholder='Email'
						className='bg-transparent border-[#4D4B4B] border-b-[1px] p-2 outline-none focus:border-[#3DD2CC] transition-all'
					/>
					<input
						type='password'
						placeholder='Password'
						className='bg-transparent border-[#4D4B4B] border-b-[1px] p-2 outline-none focus:border-[#3DD2CC] transition-all'
					/>
					<button
						type='submit'
						className='h-14 mt-10 text-[#191919] text-xl font-semibold bg-[#FEFEFE] rounded-2xl transition-all hover:opacity-60'
					>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
