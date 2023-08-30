import Image from 'next/image'
import logo from '@/../public/Logo.svg'

const LogoSpinner = () => {
	return (
		<div className='w-fit logo-spinner'>
			<Image src={logo} width={80} height={80} alt='Movibes Logo' />
		</div>
	)
}

export default LogoSpinner
