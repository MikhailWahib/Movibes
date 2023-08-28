'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'

const options = [
	{
		name: 'Most Popular',
		value: 'popularity.desc',
		icon: AiOutlineArrowUp,
	},
	{
		name: 'Latest',
		value: 'release_date.desc',
		icon: AiOutlineArrowUp,
	},
	{
		name: 'Heighest Rated',
		value: 'vote_average.desc',
		icon: AiOutlineArrowUp,
	},
]

const Filter = ({ href }: { href: string }) => {
	const router = useRouter()

	return (
		<select
			className='bg-[#212121] rounded-lg text-sm p-1 text-white'
			defaultValue={options[0].value}
			onChange={(event) => {
				const selectedValue = event.target.value
				router.push(`${href}&sort_by=${selectedValue}`)
			}}
		>
			{options.map((item) => (
				<option key={item.value} value={item.value}>
					{item.name}
				</option>
			))}
		</select>
	)
}

export default Filter
