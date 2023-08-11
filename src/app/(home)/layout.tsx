import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex min-h-screen text-white'>
			<Sidebar />
			<div className='flex-1 mx-11 mt-9'>
				<Topbar />
				{children}
			</div>
		</div>
	)
}
