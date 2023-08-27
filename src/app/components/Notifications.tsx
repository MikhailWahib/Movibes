'use client'
import { useState } from 'react'
import { BiSolidBellRing } from 'react-icons/bi'

const Notifications = () => {
	const [openNotifications, setOpenNotifications] = useState(false)
	return (
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
	)
}

export default Notifications
