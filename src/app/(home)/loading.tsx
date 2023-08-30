import LogoSpinner from '../components/LogoSpinner'

const loading = () => {
	return (
		<div className='w-full h-[85vh] flex justify-center items-center'>
			<LogoSpinner />
		</div>
	)
}

export default loading
