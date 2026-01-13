'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/chat', label: 'Chat' },
        { href: '#tentang', label: 'Tentang' },
        { href: '#kontak', label: 'Kontak' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="flex flex-col">
                            <span className="text-xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                SITEJA
                            </span>
                            <span className="text-[10px] text-gray-500 -mt-1 hidden sm:block">
                                Sapa Interaktif Desa Tejamulya
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/chat"
                            className="px-5 py-2.5 bg-linear-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Mulai Chat
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 py-4 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/chat"
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-3 mt-2 bg-linear-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-xl text-center hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/25 transition-all duration-300"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Mulai Chat
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar