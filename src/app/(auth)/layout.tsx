import Link from "next/link"
import Image from "next/image"

import logo from "../../../public/Logo.svg"
import Poster from "./components/Poster"

export default async function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className='min-h-screen text-[#fefefe] overflow-hidden'>
			<div className='absolute top-5 left-6 md:top-8 md:left-12 z-50'>
				<Link href='/'>
					<Image src={logo} width={50} height={50} alt='Movibes Logo' />
				</Link>
			</div>
			<div className='flex'>
				{children}
				{/* POSTER SECTION */}
				<Poster />
			</div>
		</main>
	)
}
