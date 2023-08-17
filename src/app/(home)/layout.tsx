'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [openSidebar, setOpenSidebar] = useState(false)

	return (
		<div className='h-screen w-full text-white'>
			<Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
			<div className='flex-1 px-10 md:pl-64 md:pr-11 overflow-x-hidden mt-9'>
				<Topbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
				<main className='py-5'>{children}</main>
			</div>
		</div>
	)
}
