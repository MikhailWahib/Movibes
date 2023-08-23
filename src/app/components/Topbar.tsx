'use client'

import { useContext, useState } from 'react'
import { SidebarContext } from '@/providers/SidebarContext'

import Searchbar from './Searchbar'

import { RxAvatar } from 'react-icons/rx'
import { BiSolidBellRing } from 'react-icons/bi'
import { BiMenuAltLeft } from 'react-icons/bi'

const Topbar = () => {
	const [openNotifications, setOpenNotifications] = useState(false)

	const { openSidebar, setOpenSidebar }: any = useContext(SidebarContext)

	return (
		<div className='w-full flex items-center justify-between gap-[5vw]'>
			<button
				onClick={() => setOpenSidebar(!openSidebar)}
				className='md:hidden'
			>
				<BiMenuAltLeft size={24} />
			</button>

			<Searchbar />

			<div className='flex gap-2'>
				<button
					className='relative h-[30px] w-[30px] md:h-[40px] md:w-[40px] flex items-center justify-center bg-[#212121] rounded-full'
					onClick={() => setOpenNotifications(!openNotifications)}
				>
					<BiSolidBellRing />
					{/* NOTIFICATIONS BOX - OPENS ON CLICK */}
					<div
						className={`absolute top-14 flex min-h-[128px] w-48 bg-[#212121] rounded-lg z-50 transition-all ${
							openNotifications ? 'scale-100' : 'scale-0'
						}`}
					>
						<p className='self-center w-full text-sm opacity-70'>
							No notifications.
						</p>
					</div>
				</button>
				<div className='rela h-[30px] w-[30px]tive md:h-[40px] md:w-[40px] bg-[#212121] rounded-full overflow-clip'>
					<RxAvatar size='fill' opacity={0.8} />
				</div>
			</div>
		</div>
	)
}

export default Topbar
