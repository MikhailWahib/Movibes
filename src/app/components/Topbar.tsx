import Searchbar from './Searchbar'
import { BiSolidBellRing } from 'react-icons/bi'

const Topbar = () => {
	return (
		<div className='w-full flex items-center justify-between'>
			<Searchbar />
			<div className='flex gap-2'>
				<button className='h-[40px] w-[40px] flex items-center justify-center bg-[#212121] rounded-full '>
					<BiSolidBellRing />
				</button>
				<div className='h-[40px] w-[40px] bg-[#212121] rounded-full'></div>
			</div>
		</div>
	)
}

export default Topbar
