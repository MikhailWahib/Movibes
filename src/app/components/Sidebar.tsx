'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import logo from '../../../public/movibesLogo.svg'

import { AiOutlineHome } from 'react-icons/ai'
import { BiCameraMovie } from 'react-icons/bi'
import { MdOutlineUpcoming } from 'react-icons/md'
import { BiSlideshow } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'

const listItems = [
	{ name: 'Home', href: '/home', icon: AiOutlineHome },
	{ name: 'Movies', href: '/movies', icon: BiCameraMovie },
	{ name: 'Tv Shows', href: '/tv-shows', icon: BiSlideshow },
	{ name: 'Upcoming', href: '/upcoming', icon: MdOutlineUpcoming },
]

type Props = {
	openSidebar: boolean
	setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ openSidebar, setOpenSidebar }: Props) => {
	const path = usePathname()
	const [activeRoute, setActiveRoute] = useState(path)

	useEffect(() => {
		setActiveRoute(path)
	}, [path])
	return (
		<>
			{/* BLACK SHADOW WHEN SIDEBAR IS OPEN ON MOBILE SCREENS */}
			<div
				className={`${
					openSidebar ? 'block' : 'hidden'
				} md:hidden absolute inset-0 w-full h-full bg-black/50 z-40 transition-all`}
				onClick={() => setOpenSidebar(false)}
			></div>

			<div
				className={`${
					openSidebar ? 'translate-x-0' : '-translate-x-[100%]'
				} md:translate-x-0 absolute inset-0 md:fixed h-full w-56 md:rounded-tr-[45px] md:rounded-br-[45px] bg-[#212121] text-lg font-medium text-[#666] z-50 transition-all`}
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
								activeRoute === item.href
									? 'bg-[#3dd2cc66] text-[#3DD2CC]'
									: 'bg-none'
							}`}
							onClick={() => setOpenSidebar(false)}
						>
							<Link
								href={item.href}
								className={`h-full w-full flex items-center ${
									activeRoute === item.href &&
									'after:absolute after:right-0 after:h-full after:w-1 after:bg-[#3dd2ccbf]'
								}`}
							>
								<div className='flex items-center gap-2'>
									<div
										className={`${
											activeRoute === item.href
										} && 'text-[#3DD2CC]'`}
									>
										<item.icon size={20} />
									</div>
									{item.name}
								</div>
							</Link>
						</li>
					))}
				</ul>
				<button className='absolute bottom-10 flex items-center gap-2 ml-11 transition-all hover:opacity-70'>
					<FiLogOut />
					<span>Logout</span>
				</button>
			</div>
		</>
	)
}

export default Sidebar
