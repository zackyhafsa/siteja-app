'use client'

import React from 'react'
import Link from 'next/link'
import {
    MessageCircle,
    Sparkles,
    ArrowRight,
    MapPin,
    Users,
    Clock,
    CheckCircle2,
    Zap
} from 'lucide-react'

const HeroSection = () => {
    const features = [
        { icon: Clock, text: 'Layanan 24/7' },
        { icon: Zap, text: 'Respon Cepat' },
        { icon: CheckCircle2, text: 'Informasi Akurat' },
    ]

    const stats = [
        { value: '1000+', label: 'Warga Terbantu' },
        { value: '24/7', label: 'Layanan Aktif' },
        { value: '50+', label: 'Topik Tersedia' },
    ]

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-emerald-50">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                {/* linear Orbs */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

                {/* Floating Elements */}
                <div className="absolute top-20 left-[15%] w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-60" style={{ animationDuration: '3s' }} />
                <div className="absolute top-40 right-[20%] w-2 h-2 bg-teal-400 rounded-full animate-bounce opacity-60" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                <div className="absolute bottom-40 left-[25%] w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-40" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
                <div className="absolute bottom-60 right-[15%] w-2 h-2 bg-emerald-500 rounded-full animate-bounce opacity-50" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 rounded-full text-emerald-700 text-sm font-medium shadow-sm">
                            <Sparkles className="w-4 h-4" />
                            <span>Chatbot AI Desa Tejamulya</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Selamat Datang di{' '}
                                <span className="relative">
                                    <span className="bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                        SITEJA
                                    </span>
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                        <path d="M2 8C50 2 150 2 198 8" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                                                <stop stopColor="#10b981" />
                                                <stop offset="0.5" stopColor="#14b8a6" />
                                                <stop offset="1" stopColor="#06b6d4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                <span className="font-semibold text-emerald-600">Sapa Interaktif Desa Tejamulya</span> —
                                Asisten virtual cerdas yang siap membantu Anda mendapatkan informasi seputar layanan dan kegiatan Desa Tejamulya kapan saja.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm"
                                >
                                    <feature.icon className="w-4 h-4 text-emerald-600" />
                                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/chat"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-semibold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>Mulai Percakapan</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                href="#tentang"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <MapPin className="w-5 h-5 text-emerald-600" />
                                <span>Tentang Desa</span>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Chat Preview */}
                    <div className="relative lg:pl-8">
                        {/* Decorative Ring */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-87.5 h-87.5 sm:w-112.5 sm:h-112.5 border border-emerald-200/50 rounded-full animate-spin-slow opacity-50" style={{ animationDuration: '20s' }} />
                            <div className="absolute w-75 h-75 sm:w-95 sm:h-95 border border-teal-200/50 rounded-full animate-spin-slow opacity-50" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                        </div>

                        {/* Chat Preview Card */}
                        <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100/50 overflow-hidden mx-auto max-w-md">
                            {/* Chat Header */}
                            <div className="bg-linear-to-r from-emerald-500 to-teal-600 px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold">SITEJA Assistant</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                                            <span className="text-emerald-100 text-sm">Online • Siap Membantu</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="p-6 space-y-4 bg-linear-to-b from-gray-50/50 to-white">
                                {/* Bot Message */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-gray-100 max-w-[85%]">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Halo! 👋 Selamat datang di SITEJA. Saya siap membantu Anda dengan informasi seputar Desa Tejamulya. Ada yang bisa saya bantu?
                                        </p>
                                    </div>
                                </div>

                                {/* User Message */}
                                <div className="flex gap-3 justify-end">
                                    <div className="bg-linear-to-r from-emerald-500 to-teal-600 rounded-2xl rounded-tr-md px-4 py-3 shadow-md max-w-[85%]">
                                        <p className="text-white text-sm">
                                            Bagaimana cara mengurus surat keterangan domisili?
                                        </p>
                                    </div>
                                </div>

                                {/* Bot Typing Indicator */}
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-linear-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="bg-white rounded-2xl rounded-tl-md px-4 py-3 shadow-sm border border-gray-100">
                                        <div className="flex items-center gap-1">
                                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Input Preview */}
                            <div className="px-6 pb-6">
                                <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
                                    <input
                                        type="text"
                                        placeholder="Ketik pertanyaan Anda..."
                                        className="flex-1 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none"
                                        disabled
                                    />
                                    <button className="w-10 h-10 bg-lienar-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                                        <ArrowRight className="w-5 h-5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute -top-4 -right-4 sm:top-4 sm:right-0 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-100 animate-float" style={{ animationDuration: '4s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <Users className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Warga Online</p>
                                    <p className="text-lg font-bold text-gray-900">127</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 sm:bottom-20 sm:-left-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-gray-100 animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Kepuasan</p>
                                    <p className="text-lg font-bold text-gray-900">98%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="url(#wave-gradient)"
                        fillOpacity="0.1"
                    />
                    <defs>
                        <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
                            <stop stopColor="#10b981" />
                            <stop offset="0.5" stopColor="#14b8a6" />
                            <stop offset="1" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default HeroSection
