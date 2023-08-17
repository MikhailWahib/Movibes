import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex min-h-screen w-full text-white'>
			<Sidebar />
			<div className='flex-1 pl-64 pr-11 overflow-x-hidden mt-9'>
				<Topbar />
				<main className='py-5'>{children}</main>
			</div>
		</div>
	)
}
