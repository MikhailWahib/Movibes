import Image from 'next/image'

import starIcon from '@/../public/star.png'

import { api } from '@/api'

import VideoPlayer from '@/app/components/VideoPlayer'

import { ShowDetails } from '@/types'

const getShow = async (id: number): Promise<ShowDetails | undefined> => {
	try {
		const res = await api.get(
			`movie/${id}?append_to_response=credits,videos&language=en-US`
		)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

const Page = async ({ params }: { params: { id: number } }) => {
	const show = await getShow(params.id)

	return (
		<main>
			<VideoPlayer show={show} />

			<div className='flex justify-between gap-5 mt-5'>
				<div className=''>
					<h2 className='font-bold text-2xl inline-block text-[#3DD2CC] mr-2'>
						{show?.title}
					</h2>
					<span>| {Math.floor((show?.runtime! / 60) * 10) / 10} h</span>
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
