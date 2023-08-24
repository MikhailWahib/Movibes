import Link from 'next/link'
import poster from '../../../public/1af325cb99775647a249f0209fdb69c6.png'
import Image from 'next/image'

import { BsFillPlayFill } from 'react-icons/bs'
import { AiFillInfoCircle } from 'react-icons/ai'
import { ShowDiscover } from '@/types'
import { api } from '@/api'

const getShow = async (): Promise<ShowDiscover | undefined> => {
	const show = api.get('/trending/movie/day?language=en-US').then((res) => {
		return res.data.results[0]
	})
	return show
}

const Billboard = async () => {
	const show = await getShow()

	return (
		<div className='relative group h-[30vw] md:h-[25vw] flex w-full rounded-2xl overflow-hidden z-0'>
			<div className='absolute inset-0'>
				<Image
					src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/original${show?.backdrop_path}`}
					fill
					alt='Poster'
				></Image>
			</div>
			<div className='flex justify-between mr-[4%] mb-[2%] self-end w-full text-sm font-normal text-[#e8e8e8]'>
				<div className='relative'>
					<div className='flex items-center h-full w-[120%] pl-3 bg-[#e8e8e819] backdrop-filter backdrop-blur-[10px] rounded-tr-lg rounded-br-lg text-[#3DD2CC] font-bold'>
						<h2>{show?.title || show?.name}</h2>
					</div>
				</div>

				<div className='flex gap-5'>
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
		</div>
	)
}

export default Billboard
