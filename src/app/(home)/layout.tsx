import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

import { SidebarProvider } from '@/providers/SidebarProvider'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='h-screen w-full text-white'>
			<SidebarProvider>
				<Sidebar />
				<div className='flex-1 px-10 md:pl-64 md:pr-11 overflow-x-hidden pt-9'>
					<Topbar />
					<main className='py-5'>{children}</main>
				</div>
			</SidebarProvider>
		</div>
	)
}
