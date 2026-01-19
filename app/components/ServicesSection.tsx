'use client'

import React from 'react'
import { FileText, Heart, Calendar, MessageSquare, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react'

const ServicesSection = () => {
    const services = [
        {
            icon: FileText,
            title: 'Layanan Administrasi',
            description: 'Pengurusan KTP, KK, Surat Pindah, dan dokumen kependudukan lainnya secara online.',
            color: 'emerald'
        },
        {
            icon: Heart,
            title: 'Bantuan Sosial',
            description: 'Informasi lengkap jadwal penyaluran, syarat penerima, dan pengecekan status bantuan.',
            color: 'teal'
        },
        {
            icon: Calendar,
            title: 'Agenda Desa',
            description: 'Jadwal kegiatan gotong royong, musyawarah desa, posyandu, dan acara kemasyarakatan.',
            color: 'cyan'
        },
        {
            icon: MessageSquare,
            title: 'Layanan Pengaduan',
            description: 'Saluran aspirasi dan pengaduan warga untuk kemajuan pembangunan Desa Tejamulya.',
            color: 'blue'
        }
    ]

    return (
        <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
                        <Zap className="w-4 h-4" />
                        <span>Layanan Digital Terpadu</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Solusi Cerdas untuk{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Warga Desa
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                <path d="M2 6C50 2 150 2 198 6" stroke="url(#service-gradient)" strokeWidth="3" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="service-gradient" x1="0" y1="0" x2="200" y2="0">
                                        <stop stopColor="#10b981" />
                                        <stop offset="1" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Nikmati kemudahan akses berbagai layanan desa melalui SITEJA.
                        Hemat waktu, transparan, dan dapat diakses kapan saja dari mana saja.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-emerald-100/50 hover:border-emerald-200/50 transition-all duration-300"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative">
                                {/* Icon */}
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                                    {service.description}
                                </p>

                                {/* Arrow Link */}
                                <div className="flex items-center text-emerald-600 font-medium text-sm group/link">
                                    <span className="mr-2">Akses Layanan</span>
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Feature Box */}
                <div className="mt-16 lg:mt-24 relative overflow-hidden bg-gradient-to-r from-emerald-900 to-teal-900 rounded-[2.5rem] p-8 lg:p-12 text-white">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                        <div className="space-y-6 max-w-2xl">
                            <div className="flex items-center gap-3 text-emerald-300 font-medium">
                                <Shield className="w-5 h-5" />
                                <span>Keamanan Data Terjamin</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                                Privasi data warga adalah prioritas utama kami.
                            </h3>
                            <p className="text-emerald-100 text-lg leading-relaxed">
                                Seluruh percakapan dan data yang Anda masukkan terlindungi dengan enkripsi standar industri.
                                Gunakan layanan dengan tenang dan aman.
                            </p>
                        </div>

                        <div className="shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                            <Sparkles className="w-12 h-12 text-emerald-400 mb-4" />
                            <div className="text-2xl font-bold mb-1">100%</div>
                            <div className="text-emerald-200">Aman & Terpercaya</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
