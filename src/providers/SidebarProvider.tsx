'use client'

import { useState, createContext } from 'react'

const SidebarContext = createContext<{
	openSidebar: boolean
	setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
	const [openSidebar, setOpenSidebar] = useState(false)
	return (
		<SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>
			{children}
		</SidebarContext.Provider>
	)
}

export { SidebarContext, SidebarProvider }
