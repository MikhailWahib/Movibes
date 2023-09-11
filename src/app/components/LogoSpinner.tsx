import Image from 'next/image'
import logo from '@/../public/Logo.svg'

interface Props {
	width?: number
	height?: number
}

const LogoSpinner = ({ width, height }: Props) => {
	return (
		<Image
			src={logo}
			width={width || 80}
			height={height || 80}
			alt='Movibes Logo'
			className='logo-spinner'
		/>
	)
}

export default LogoSpinner
