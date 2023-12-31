import Image from 'next/image'

import { getData } from '@/api'

import { ShowDiscover } from '@/types'
import { moviesGenresMapping } from '@/constants'

const getMovie = async (): Promise<ShowDiscover | undefined> => {
	const movie = getData(
		'/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc',
		{
			next: { revalidate: 3600 },
		}
	).then((res) => {
		return res.results[Math.floor(Math.random() * res.results.length)]
	})
	return movie
}

const Poster = async () => {
	const movie = await getMovie()
	return (
		<div className='hidden md:block relative h-screen flex-[55%]'>
			<div>
				<Image
					src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/original${movie?.poster_path}`}
					fill
					alt={`${movie?.title || movie?.name} Poster`}
				/>
			</div>
			<div className='absolute flex w-full bottom-0 h-[210px] pt-6 px-7 bg-[#19191908] backdrop-filter backdrop-blur-[2px] transition-all duration-500'>
				<div className='flex-1'>
					<h2 className='text-4xl font-semibold mb-1 text-yellow-500'>
						{movie?.title}
					</h2>
					<p className='text-xl mt-4'>
						Genres:{' '}
						{movie?.genre_ids
							.map(
								(genre) =>
									moviesGenresMapping[genre as keyof typeof moviesGenresMapping]
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
