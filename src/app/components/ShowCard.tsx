import Image from 'next/image'
import poster from '../../../public/poster.png'
import starIcon from '../../../public/star.png'
import Link from 'next/link'

import { ShowDiscoverResponse } from '@/types'
import { moviesGenresHash } from '@/constants'

type Props = {
	show: ShowDiscoverResponse
}

const ShowCard = ({ show }: Props) => {
	return (
		<div className='group relative h-52 min-w-[11rem] rounded-lg overflow-hidden'>
			<Image
				src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/w500${show.poster_path}`}
				fill
				alt='Poster'
			/>
			<div className='absolute top-3 -right-3 pr-4 py-[1px] rounded-2xl text-xs backdrop-filter backdrop-blur-[60px] bg-black/20'>
				<Image
					src={starIcon}
					width={18}
					height={18}
					alt='Star'
					className='inline-block relative -top-[1.5px] mx-[5px]'
				/>
				<span className=''>{show.vote_average}/10</span>
			</div>

			{/* ON HOVER */}
			<div className='absolute h-full w-full bg-black/0 transition-all group-hover:bg-black/20'>
				<Link href='/movie'>
					<div className='relative top-[100%] group-hover:top-[65.5%] p-2 bg-[#e8e8e819] backdrop-blur-[2.5px] transition-all z-50 overflow-hidden text-ellipsis'>
						<h3 className='text-cyan-300 font-semibold whitespace-nowrap'>
							{show.title || show.name}
						</h3>
						<p className='h-8 text-white leading-4 text-xs text-ellipsis overflow-hidden'>
							Genre:{' '}
							{show?.genre_ids
								.map(
									(genre) =>
										moviesGenresHash[genre as keyof typeof moviesGenresHash]
								)
								.join(', ')}
						</p>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default ShowCard