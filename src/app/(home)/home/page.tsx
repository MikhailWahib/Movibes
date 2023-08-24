import Link from 'next/link'

import Billboard from '@/app/components/Billboard'
import Slideshow from '@/app/components/Slideshow'

import { ShowDiscover } from '@/types'

import { api } from '@/api'

const getMovies = async (): Promise<ShowDiscover[] | undefined> => {
	try {
		const res = await api.get(
			'/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc'
		)
		return res.data.results
	} catch (error) {
		console.log(error)
	}
}

const getTvShows = async (): Promise<ShowDiscover[] | undefined> => {
	try {
		const res = await api.get(
			'/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
		)
		return res.data.results
	} catch (error) {
		console.log(error)
	}
}

const getUpcomings = async (): Promise<ShowDiscover[] | undefined> => {
	try {
		const res = await api.get('/movie/upcoming?language=en-US&page=1')
		return res.data.results
	} catch (error) {
		console.log(error)
	}
}

export default async function Page() {
	const movies = await getMovies()
	const tvShows = await getTvShows()
	const upcomings = await getUpcomings()

	return (
		<>
			<Billboard />
			<div className='mt-10'>
				<div className='flex justify-between items-center'>
					<h2>Movies</h2>
					<Link
						href='/movies'
						className='text-sm text-[#666666] font-medium transition-colors hover:text-[#3DD2CC]'
					>
						See all
					</Link>
				</div>
				<Slideshow shows={movies!} />
			</div>
			<div>
				<div className='flex justify-between items-center'>
					<h2>Tv Shows</h2>
					<Link
						href='/tv-shows'
						className='text-sm text-[#666666] font-medium transition-colors hover:text-[#3DD2CC]'
					>
						See all
					</Link>
				</div>
				<Slideshow shows={tvShows!} />
			</div>
			<div>
				<div className='flex justify-between items-center'>
					<h2>Upcoming</h2>
				</div>
				<Slideshow shows={upcomings} />
			</div>
		</>
	)
}
