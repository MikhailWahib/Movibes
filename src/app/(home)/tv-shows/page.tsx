import { api } from '@/api'
import ShowCard from '@/app/components/ShowCard'
import { ApiDiscoverResponse } from '@/types'
import CategoryNav from '../../components/CategoryNav'
import Pagination from '@/app/components/Pagination'

const getMovies = async (
	category: string,
	page: string,
	sort_by?: string
): Promise<ApiDiscoverResponse> => {
	const response = api
		.get(
			`/${category}/tv${
				category === 'trending' ? '/day' : ''
			}?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=${sort_by}&page=${page}`
		)
		.then((res) => {
			return res.data
		})
	return response
}

interface SearchParams {
	category: string
	page: string
	sort_by: string
}

const Page = async ({ searchParams }: { searchParams: SearchParams }) => {
	const { category, page, sort_by } = searchParams

	const data = await getMovies(
		category || 'discover',
		page || '1',
		sort_by || 'popularity.desc'
	)

	return (
		<main>
			<CategoryNav
				navItems={['Discover', 'Trending']}
				category={searchParams.category}
			/>
			<div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-x-[2vw] gap-y-5 mt-5'>
				{data?.results.map((movie) => (
					<ShowCard key={movie.id} show={movie} />
				))}
			</div>
			<Pagination totalPages={data.total_pages} />
		</main>
	)
}

export default Page
