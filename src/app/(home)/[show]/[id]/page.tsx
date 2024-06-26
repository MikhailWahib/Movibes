import Image from 'next/image'
import starIcon from '@/../public/star.png'
import { getData } from '@/api'
import VideoPlayer from '@/app/components/VideoPlayer'
import { ShowDetails } from '@/types'

const getShow = async (
	id: number,
	showType: string
): Promise<ShowDetails | undefined> => {
	try {
		const res = await getData(
			`/${showType}/${id}?append_to_response=credits,videos&language=en-US`
		)
		return res
	} catch (error) {
		console.log(error)
	}
}

interface Props {
	params: {
		id: number,
		show: 'movie' | 'tv'
	}
}

const Page = async ({ params }: Props) => {
	const show = await getShow(params.id, params.show)

	const trailerSrc = show?.videos?.results?.filter((item: any) => {
		return (
			item.type === 'Trailer' &&
			item.site === 'YouTube' &&
			item.official === true
		)
	})[0]

	return (
		<main>
			<div className='w-full h-[20rem] md:h-[25rem] relative rounded-xl overflow-hidden'>
				{trailerSrc ? (
					<VideoPlayer show={show} trailerSrc={trailerSrc.key} />
				) : (
					<div>
						<Image
							src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/original${show?.backdrop_path}`}
							fill
							alt={`Poster of ${show?.name || show?.title}`}
						/>
					</div>
				)}
			</div>

			<div className='flex justify-between gap-5 mt-5'>
				<div>
					<h2 className='font-bold text-2xl inline-block text-[#3DD2CC] mr-2'>
						{show?.title || show?.name}
					</h2>
					<span>
						|{' '}
						{Math.floor(
							(((show?.runtime! || show?.episode_run_time!) as any) / 60) * 10
						) / 10}{' '}
						h
					</span>
				</div>

				<div className='flex items-center gap-2'>
					<span>{Math.floor(show?.vote_average! * 10) / 10}</span>
					<Image src={starIcon} width={20} height={20} alt='Star' />
				</div>
			</div>
			<div className='mt-2'>
				{show?.genres?.map((genre) => (
					<span
						key={genre.id}
						className='border rounded-full mr-2 px-2 text-sm'
					>
						{genre.name}
					</span>
				))}
			</div>
			<div className='mt-4'>
				<p>{show?.overview}</p>
			</div>
			<div className='mt-4'>
				<ul className='first:border-t border-white/30'>
					<li className='border-b py-2 border-white/30'>
						Director:{' '}
						{
							show?.credits?.crew?.filter(
								(director) => director.job === 'Director'
							)[0]?.name
						}
					</li>
					<li className='border-b py-2 border-white/30'>
						Writers:{' '}
						{show?.credits.crew
							?.filter((writer) => writer.job === 'Writer')
							.map((writer) => writer.name)
							.join(', ')}
					</li>
					<li className='border-b py-2 border-white/30'>
						Stars:{' '}
						{show?.credits?.cast
							?.filter((actor) => actor.known_for_department === 'Acting')
							.splice(0, 5)
							.map((actor) => actor.name)
							.join(', ')}
					</li>
				</ul>
			</div>
		</main>
	)
}

export default Page
