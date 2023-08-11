import Image from 'next/image'
import { Movie } from '@/types'

type Props = {
	movie: Movie | undefined
}

const Poster = async ({ movie }: Props) => {
	return (
		<div
			className='hidden md:block relative bg-cover bg-[100% 100%] bg-no-repeat h-screen flex-[55%]'
			style={{
				backgroundImage: `url(${movie?.poster})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100% 100%',
				backgroundPosition: '100% 100%',
			}}
		>
			<div className='absolute flex w-full bottom-0 h-[210px] pt-6 px-7 bg-[#19191908] backdrop-filter backdrop-blur-[2px] transition-all duration-500 translate-y-[0]'>
				<div className='flex-1'>
					<h2 className='text-4xl font-semibold mb-1 text-yellow-500'>
						{movie?.title}
					</h2>
					<p className='text-xl'>{`${movie?.year} | ${movie?.rate} | ${movie?.duration}`}</p>
					<p className='text-xl mt-4'>
						Genres: {movie?.genre?.map((genre) => genre).join(', ')}
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
						<p className='font-semibold'>{movie?.rateOutOf10} / 10</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Poster
