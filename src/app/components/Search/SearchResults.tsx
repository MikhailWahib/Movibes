'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { useRouter, useSearchParams } from 'next/navigation'

import axios from 'axios'

import { SeachResponse } from '@/types'

import starIcon from '@/../public/star.png'

interface Props {
	query: string
	setQuery: (val: string) => void
}

const SearchResults = ({ query, setQuery }: Props) => {
	const [data, setData] = useState<SeachResponse | undefined>()

	const router = useRouter()

	const getSearchResults = async (query: string): Promise<void> => {
		try {
			const res = await axios.get(`/api/search/${query}`)
			const data = await res.data.data
			setData(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		if (query) {
			getSearchResults(query)
		}
	}, [query])

	if (!query) return null

	return (
		<div className='absolute top-[130%] bg-[#212121] w-full max-h-[85vh] overflow-y-scroll rounded-3xl z-40'>
			<ul className='w-full h-full flex flex-col overflow-y-hidden'>
				{data?.results.map((show) => (
					<li
						key={show.id}
						className='p-3 transition-all hover:bg-[#3dd2cc66] cursor-pointer'
						onClick={() => {
							router.push(
								`/show/${show.id}?show_type=${show.title ? 'movie' : 'tv'}`
							)
							setQuery('')
						}}
					>
						{/* <Link href={`/show/${show.id}`}> */}
						<div className='flex items-center gap-10'>
							<Image
								src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/w500${show.poster_path}`}
								width={75}
								height={75}
								className='rounded-2xl'
								alt={`Poster for ${show.name || show.title}`}
							/>
							<div>
								<h3 className='text-[#3DD2CC] text-xl'>
									{show.name || show.title}
								</h3>
								<p className='opacity-70 text-sm'>
									{show.release_date || show.first_air_date}
								</p>
							</div>
							<div className='ml-auto'>
								<span className='text-xs opacity-70'>
									{Math.round(show.vote_average * 10) / 10}/10
								</span>
								<Image
									src={starIcon}
									width={18}
									height={18}
									alt='Star'
									className='inline-block relative -top-[1.5px] mx-[5px]'
								/>
							</div>
						</div>
						{/* </Link> */}
					</li>
				))}
			</ul>
		</div>
	)
}

export default SearchResults
