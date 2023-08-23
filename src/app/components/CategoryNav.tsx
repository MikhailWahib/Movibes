'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Filter from './Filter'

interface Props {
	category: string
	navItems: string[]
}

const CategoryNav = ({ category, navItems }: Props) => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	return (
		<div className='flex justify-between items-center'>
			<nav>
				<ul className='flex gap-5 w-fit'>
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
			</nav>
			{searchParams.get('category') !== 'trending' && (
				<div>
					<Filter href={`${pathname}?category=${category}`} />
				</div>
			)}
		</div>
	)
}

export default CategoryNav
