import Search from './Search/Search'
import SidebarBtn from './SidebarBtn'
import Notifications from './Notifications'

import { RxAvatar } from 'react-icons/rx'

const Topbar = () => {
	return (
		<header className='w-full flex items-center justify-between gap-[5vw]'>
			<SidebarBtn />

			{/* <div className='relative w-full'> */}
			<Search />
			{/* </div> */}

			<div className='flex gap-2'>
				<Notifications />
				<div className='relative h-[30px] w-[30px] md:h-[40px] md:w-[40px] bg-[#212121] rounded-full overflow-clip'>
					<RxAvatar size='fill' opacity={0.8} />
				</div>
			</div>
		</header>
	)
}

export default Topbar
