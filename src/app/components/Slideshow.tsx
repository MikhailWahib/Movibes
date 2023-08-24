import ShowCard from './ShowCard'

import { ShowDiscover } from '@/types'

type Props = {
	shows?: ShowDiscover[]
}

const Slideshow = ({ shows }: Props) => {
	return (
		<div className='relative w-full overflow-y-hidden overflow-x-scroll flex gap-5 my-5'>
			{shows?.map((show) => (
				<ShowCard key={show.id} show={show!} />
			))}
		</div>
	)
}

export default Slideshow
