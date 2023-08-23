import { AiOutlineSearch } from 'react-icons/ai'

interface Props {}

const Searchbar = (props: Props) => {
	return (
		<div className='w-full relative'>
			<div className='absolute top-[9.5px] left-[15px] opacity-70'>
				<AiOutlineSearch />
			</div>
			<input
				type='text'
				className='h-[35px] w-full bg-[#212121] rounded-3xl text-sm pl-11 placeholder:opacity-70'
				placeholder='Search for movies, TV shows...'
			/>
		</div>
	)
}

export default Searchbar
