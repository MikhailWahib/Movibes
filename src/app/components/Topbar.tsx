'use client'

import { useState } from 'react'

import Image from 'next/image'
import Searchbar from './Searchbar'
import avatarImg from '../../../public/avatarImg.jpg'
import { BiSolidBellRing } from 'react-icons/bi'

const Topbar = () => {
	const [openNotifications, setOpenNotifications] = useState(false)

	return (
		<div className='w-full flex items-center justify-between'>
			<Searchbar />
			<div className='flex gap-2'>
				<button
					className='relative h-[40px] w-[40px] flex items-center justify-center bg-[#212121] rounded-full'
					onClick={() => setOpenNotifications(!openNotifications)}
				>
					<BiSolidBellRing />
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
				<div className='relative h-[40px] w-[40px] bg-[#212121] rounded-full overflow-clip'>
					<Image src={avatarImg} width={40} height={40} alt='Avatar' />
				</div>
			</div>
		</div>
	)
}

export default Topbar
