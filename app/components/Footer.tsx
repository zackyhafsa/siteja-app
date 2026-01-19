'use client'

import React from 'react'
import Link from 'next/link'
import { Sparkles, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">SITEJA</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Sistem Informasi Desa Tejamulya berbasis AI.
                            Memberikan kemudahan akses informasi dan layanan publik
                            untuk mewujudkan desa digital yang transparan dan efisien.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold text-lg mb-6">Navigasi</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Beranda', href: '/' },
                                { name: 'Layanan', href: '#' },
                                { name: 'Tentang Desa', href: '#tentang' },
                                { name: 'Tanya SITEJA', href: '/chat' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-emerald-400 transition-colors duration-200 block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <h3 className="text-white font-semibold text-lg mb-6">Kontak Kami</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                                <span>
                                    Jl. Raya Desa Tejamulya No. 1,<br />
                                    Kec. Argapura, Kab. Majalengka,<br />
                                    Jawa Barat
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>(0233) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                                <span>info@tejamulya.desa.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Pemerintah Desa Tejamulya. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
