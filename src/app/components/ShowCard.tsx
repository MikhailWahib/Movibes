import Image from 'next/image'
import starIcon from '../../../public/star.png'
import Link from 'next/link'

import { ShowDiscover } from '@/types'
import { moviesGenresMapping } from '@/constants'

type Props = {
	show: ShowDiscover
}

const ShowCard = ({ show }: Props) => {
	// IF SHOW HAS 'TITLE' THEN IT'S A MOVIE, IF 'NAME' IT'S A TV - "FROM THE API"
	const href = `/show/${show.id}?show_type=${show.title ? 'movie' : 'tv'}`

	return (
		<div className='group relative h-52 min-w-[9rem] sm:min-w-[9.5rem] w-full max-w-[13rem] rounded-lg overflow-hidden'>
			<Link href={href}>
				{show.poster_path ? (
					<Image
						src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/w500${show.poster_path}`}
						fill
						alt={`Poster of ${show.title || show.name}`}
					/>
				) : (
					<div className='absolute top-[40%] left-[30%] text-center'>
						No Poster
					</div>
				)}
				<div className='absolute top-3 -right-3 pr-4 py-[1px] rounded-2xl text-xs backdrop-filter backdrop-blur-[60px] bg-black/20'>
					<Image
						src={starIcon}
						width={18}
						height={18}
						alt='Star Icon'
						className='inline-block relative -top-[1.5px] mx-[5px]'
					/>
					<span className=''>{Math.round(show.vote_average * 10) / 10}/10</span>
				</div>

				{/* ON HOVER */}
				<div className='absolute h-full w-full bg-black/0 transition-all group-hover:bg-black/20'>
					<div className='relative top-[100%] group-hover:top-[65.5%] p-2 bg-[#e8e8e819] backdrop-blur-[2.5px] transition-all z-50 overflow-hidden text-ellipsis'>
						<h3 className='text-cyan-300 font-semibold whitespace-nowrap'>
							{show.title || show.name}
						</h3>
						<p className='h-8 text-white leading-4 text-xs text-ellipsis overflow-hidden'>
							Genre:{' '}
							{show?.genre_ids
								.map(
									(genre) =>
										moviesGenresMapping[
											genre as keyof typeof moviesGenresMapping
										]
								)
								.join(', ')}
						</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default ShowCard
