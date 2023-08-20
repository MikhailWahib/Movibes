'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
	totalPages: number
}

const Pagination = ({ totalPages }: Props) => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams: any = useSearchParams()
	const [currentPage, setCurrentPage] = useState(1)

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)

			return params.toString()
		},
		[searchParams]
	)

	useEffect(() => {
		const pageFromURL = searchParams.get('page')
		const page = pageFromURL ? parseInt(pageFromURL) : 1
		setCurrentPage(page)
	}, [searchParams])

	return (
		<div>
			<ReactPaginate
				previousLabel={'<-'}
				nextLabel={'->'}
				pageCount={totalPages}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={(e) => {
					router.push(
						pathname +
							'?' +
							createQueryString('page', (e.selected + 1).toString())
					)
				}}
				forcePage={currentPage - 1}
				containerClassName={
					'flex items-center justify-between text-xs px-10 mt-4'
				}
				previousClassName={
					'bg-[#3dd2cc66] text-xs text-white px-3 py-1 rounded-lg'
				}
				nextClassName={'bg-[#3dd2cc66] text-xs text-white px-3 py-1 rounded-lg'}
				activeClassName={'bg-[#3DD2CC] text-white px-3 py-1 rounded-lg'}
			/>
		</div>
	)
}

export default Pagination
