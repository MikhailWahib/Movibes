import Link from 'next/link'
import poster from '../../../public/1af325cb99775647a249f0209fdb69c6.png'
import Image from 'next/image'

import { BsFillPlayFill } from 'react-icons/bs'
import { AiFillInfoCircle } from 'react-icons/ai'
import { ShowDiscoverResponse } from '@/types'
import { api } from '@/api'

const getMovie = async (): Promise<ShowDiscoverResponse | undefined> => {
	const movie = api.get('/trending/movie/day?language=en-US').then((res) => {
		return res.data.results[0]
	})
	return movie
}

const Billboard = async () => {
	const movie = await getMovie()

	return (
		<div className='relative h-[30vw] md:h-[25vw] flex w-full rounded-2xl overflow-hidden z-0'>
			<div className='absolute inset-0'>
				<Image
					src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/original${movie?.backdrop_path}`}
					fill
					alt='Poster'
				></Image>
			</div>
			<div className='flex justify-end mr-[4%] mb-[2%] self-end gap-5 w-full text-sm font-normal text-[#e8e8e8]'>
				<Link href='/'>
					<div className='flex justify-center items-center gap-2 h-8 w-20 bg-[#e8e8e819] backdrop-filter backdrop-blur-[2.5px] rounded-lg transition-all hover:opacity-60'>
						<BsFillPlayFill />
						Play
					</div>
				</Link>
				<Link href='/'>
					<div className='flex justify-center items-center gap-2 h-8 w-28 bg-[#e8e8e819] backdrop-filter backdrop-blur-[2.5px] rounded-lg transition-all hover:opacity-60'>
						<AiFillInfoCircle />
						More info
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Billboard
