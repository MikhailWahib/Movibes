import Image from 'next/image'

import { api } from '@/api'

import { ShowDiscover } from '@/types'
import { moviesGenresHash } from '@/constants'

export const revalidate = 10

const getData = async (): Promise<ShowDiscover | undefined> => {
	const res = await fetch(
		`${process.env.API_URL}/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.API_TOKEN}`,
			},
		}
	)
	const movies = await res.json()
	// console.log('🚀 ~ file: Poster.tsx:13 ~ getData ~ movie:', movies)
	return movies.results[Math.floor(Math.random() * movies.results.length)]
}

// const getData = async (): Promise<ShowDiscover | undefined> => {
// 	const cache_bust = Math.random()
// 	const movie = api
// 		.get(
// 			`/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&cache_bust=${cache_bust}`
// 		)
// 		.then((res) => {
// 			return res.data.results[
// 				Math.floor(Math.random() * res.data.results.length)
// 			]
// 		})
// 	return movie
// }

const Poster = async () => {
	const movie = await getData()
	return (
		<div
			className='hidden md:block relative bg-cover bg-[100% 100%] bg-no-repeat h-screen flex-[55%]'
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100% 100%',
				backgroundPosition: '100% 100%',
			}}
		>
			<div className='absolute flex w-full bottom-0 h-[210px] pt-6 px-7 bg-[#19191908] backdrop-filter backdrop-blur-[2px] transition-all duration-500 '>
				<div className='flex-1'>
					<h2 className='text-4xl font-semibold mb-1 text-yellow-500'>
						{movie?.title}
					</h2>
					<p className='text-xl mt-4'>
						Genres:{' '}
						{movie?.genre_ids
							.map(
								(genre) =>
									moviesGenresHash[genre as keyof typeof moviesGenresHash]
							)
							.join(', ')}
					</p>
				</div>
				<div className='flex-shrink-1'>
					<div className='flex items-center gap-2'>
						<Image src='/imdbLogo.png' width={50} height={50} alt='IMDB Logo' />
						<Image
							src='/star.png'
							width={20}
							height={20}
							alt='Star vector'
							className='h-[20px] w-[20px]'
						/>
						<p className='font-semibold'>{movie?.vote_average} / 10</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Poster
