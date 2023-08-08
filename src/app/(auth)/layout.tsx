import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../public/Logo.svg'
import Poster from './(components)/Poster'

import { Movie } from '@/types'

const getRandomMovieData = async (): Promise<Movie | undefined> => {
	try {
		const res = await fetch(`${process.env.API_URL}/movies/random`, {
			// Adding no cache to get a new movie every time
			cache: 'no-cache',
		})
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
	}
}

export default async function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	const movie = await getRandomMovieData()

	return (
		<main className='min-h-screen text-[#fefefe] overflow-hidden'>
			<div className='absolute top-5 left-6 md:top-12 md:left-16 z-50'>
				<Link href='/'>
					<Image src={logo} width={50} height={50} alt='Movibes Logo' />
				</Link>
			</div>
			<div className='flex'>
				{children}
				{/* POSTER SECTION */}
				<Poster movie={movie} />
			</div>
		</main>
	)
}
