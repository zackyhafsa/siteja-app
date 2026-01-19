'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const isChatPage = pathname === '/chat'

    return (
        <>
            {!isChatPage && <Navbar />}
            {children}
            {!isChatPage && <Footer />}
        </>
    )
}

export default LayoutWrapper
