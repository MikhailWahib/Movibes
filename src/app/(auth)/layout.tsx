import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/Logo.svg'

export const metadata: Metadata = {
	title: 'Movibes | Login',
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='min-h-screen text-[#fefefe] overflow-hidden'>
			<div className='absolute top-12 left-16'>
				<Link href='/'>
					<Image src={logo} width={50} height={50} alt='Movibes Logo' />
				</Link>
			</div>
			<div className='flex'>
				{children}
				{/* POSTER SECTION */}
				<div className='relative login__poster h-screen flex-[55%]'>
					<div className='absolute flex w-full bottom-0 h-[210px] pt-6 pl-7 bg-[#19191908] backdrop-filter backdrop-blur-[2px] transition-all duration-500 translate-y-[0%]'>
						<div className='flex-[80%]'>
							<h2 className='text-4xl font-semibold mb-1'>Top Gun: Maverick</h2>
							<p className='text-xl'>2022 | PG-13 | 2h 10m</p>
							<p className='text-xl mt-4'>Genres : Action , Drama</p>
						</div>
						<div className='flex-[20%]'>
							<div className='flex items-center gap-2'>
								<Image
									src='/imdbLogo.png'
									width={50}
									height={50}
									alt='IMDB Logo'
								/>
								<Image
									src='/star.png'
									width={20}
									height={20}
									alt='Star vector'
									className='h-[20px] w-[20px]'
								/>
								<p className='font-semibold'>8.5 / 10</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
