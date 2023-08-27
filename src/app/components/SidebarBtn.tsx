'use client'

import { useContext } from 'react'
import { SidebarContext } from '@/providers/SidebarContext'
import { BiMenuAltLeft } from 'react-icons/bi'

const SidebarBtn = () => {
	const { openSidebar, setOpenSidebar }: any = useContext(SidebarContext)
	return (
		<button onClick={() => setOpenSidebar(!openSidebar)} className='md:hidden'>
			<BiMenuAltLeft size={24} />
		</button>
	)
}

export default SidebarBtn
