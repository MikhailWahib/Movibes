'use client'
import { useEffect, useState, useContext } from 'react'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

import logo from '../../../public/movibesLogo.svg'

import { AiOutlineHome } from 'react-icons/ai'
import { BiCameraMovie } from 'react-icons/bi'
import { MdOutlineUpcoming } from 'react-icons/md'
import { BiSlideshow } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { SidebarContext } from '@/providers/SidebarContext'
import axios from 'axios'

const listItems = [
	{ name: 'Home', href: '/home', icon: AiOutlineHome },
	{ name: 'Movies', href: '/movies?category=discover', icon: BiCameraMovie },
	{ name: 'Tv Shows', href: '/tv-shows?category=discover', icon: BiSlideshow },
]

const Sidebar = () => {
	const router = useRouter()
	const path = usePathname()
	const [activeRoute, setActiveRoute] = useState(path)

	const { openSidebar, setOpenSidebar }: any = useContext(SidebarContext)

	useEffect(() => {
		setActiveRoute(path)
	}, [path])

	const handleLogout = async () => {
		axios
			.get('/api/auth/logout')
			.then((res) => {
				router.push('/login')
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<>
			{/* BLACK SHADOW WHEN SIDEBAR IS OPEN ON MOBILE SCREENS */}
			<div
				className={`${
					openSidebar ? 'block' : 'hidden'
				} md:hidden fixed inset-0 w-full h-full bg-black/50 z-40 overflow-clip transition-all`}
				onClick={() => setOpenSidebar(false)}
			></div>

			<div
				className={`${
					openSidebar ? 'translate-x-0' : '-translate-x-[100%]'
				} fixed inset-0 md:translate-x-0  h-full w-56 md:rounded-tr-[45px] md:rounded-br-[45px] bg-[#212121] text-lg font-medium text-[#666] z-50 transition-all`}
			>
				<div className='mx-11 mt-10 mb-20'>
					<Link href='/'>
						<Image src={logo} height={118} width={118} alt='Movibes Logo' />
					</Link>
				</div>
				<ul>
					{listItems.map((item, i) => (
						<li
							key={i}
							className={`h-20 pl-11 relative transition-all hover:text-[#3DD2CC] ${
								item.href.startsWith(activeRoute)
									? 'bg-[#3dd2cc66] text-[#3DD2CC]'
									: 'bg-none'
							}`}
							onClick={() => setOpenSidebar(false)}
						>
							<Link
								href={item.href}
								className={`h-full w-full flex items-center ${
									item.href.startsWith(activeRoute) &&
									'after:absolute after:right-0 after:h-full after:w-1 after:bg-[#3dd2ccbf]'
								}`}
							>
								<div className='flex items-center gap-2'>
									<div>
										<item.icon size={20} />
									</div>
									{item.name}
								</div>
							</Link>
						</li>
					))}
				</ul>
				<button onClick={handleLogout} className='absolute bottom-10 flex items-center gap-2 ml-11 transition-all hover:opacity-70'>
					<FiLogOut />
					<button onClick={handleLogout}>Logout</button>
				</button>
			</div>
		</>
	)
}

export default Sidebar
