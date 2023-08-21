'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Props {
	category: string
	navItems: string[]
}

const CategoryNav = ({ category, navItems }: Props) => {
	const pathname = usePathname()
	console.log(
		'🚀 ~ file: CategoryNav.tsx:13 ~ CategoryNav ~ pathname:',
		pathname
	)

	return (
		<ul className='flex gap-5 w-fit mx-auto md:mx-0'>
			{navItems.map((item, i) => (
				<li
					key={i}
					className={`${
						item.toLowerCase() === category
							? 'text-[#3DD2CC]'
							: 'text-[#666666]'
					} transition-colors`}
				>
					<Link href={`${pathname}?category=${item.toLowerCase()}`}>
						{item}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default CategoryNav
