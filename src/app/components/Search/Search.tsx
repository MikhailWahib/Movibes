'use client'

import { useRouter } from 'next/navigation'

import { AiOutlineSearch } from 'react-icons/ai'
import SearchResults from './SearchResults'
import { useState } from 'react'

const Search = () => {
	const [query, setQuery] = useState('')
	const router = useRouter()

	return (
		<>
			<div className='w-full relative'>
				<div className='absolute top-[9.5px] left-[15px] opacity-70'>
					<AiOutlineSearch />
				</div>
				<input
					type='text'
					value={query}
					className='h-[35px] w-full bg-[#212121] rounded-3xl text-sm pl-11 placeholder:opacity-70'
					placeholder='Search for movies, TV shows...'
					onChange={(e) => {
						setQuery(e.target.value)
					}}
				/>
			</div>
			<SearchResults query={query} setQuery={setQuery} />
		</>
	)
}

export default Search
