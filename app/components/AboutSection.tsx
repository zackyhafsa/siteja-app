'use client'

import React from 'react'
import {
    MapPin,
    Users,
    Building2,
    TreePine,
    Mountain,
    Landmark,
    Heart,
    Target,
    Eye,
    Sparkles,
    CheckCircle2,
    ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const AboutSection = () => {
    const desaInfo = [
        {
            icon: Users,
            label: 'Jumlah Penduduk',
            value: '5,234',
            suffix: 'Jiwa'
        },
        {
            icon: Building2,
            label: 'Jumlah KK',
            value: '1,456',
            suffix: 'KK'
        },
        {
            icon: MapPin,
            label: 'Luas Wilayah',
            value: '850',
            suffix: 'Ha'
        },
        {
            icon: Landmark,
            label: 'Jumlah RT/RW',
            value: '24/6',
            suffix: ''
        },
    ]

    const features = [
        {
            icon: TreePine,
            title: 'Potensi Pertanian',
            description: 'Desa Tejamulya memiliki lahan pertanian yang subur dengan hasil panen padi, palawija, dan sayuran berkualitas.'
        },
        {
            icon: Mountain,
            title: 'Wisata Alam',
            description: 'Pemandangan alam yang asri dengan udara sejuk menjadikan desa ini destinasi wisata yang menarik.'
        },
        {
            icon: Heart,
            title: 'Gotong Royong',
            description: 'Semangat kebersamaan dan gotong royong yang tinggi menjadi ciri khas masyarakat Desa Tejamulya.'
        },
    ]

    const visiMisi = [
        'Mewujudkan pelayanan publik yang prima dan transparan',
        'Meningkatkan kesejahteraan masyarakat melalui pemberdayaan ekonomi',
        'Mengembangkan infrastruktur desa yang berkelanjutan',
        'Melestarikan budaya dan kearifan lokal',
    ]

    return (
        <section id="tentang" className="relative py-24 lg:py-32 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-100/50 to-cyan-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                {/* Subtle Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 rounded-full text-emerald-700 text-sm font-medium shadow-sm mb-6">
                        <MapPin className="w-4 h-4" />
                        <span>Tentang Desa Kami</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Mengenal Lebih Dekat{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                Desa Tejamulya
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                <path d="M2 6C50 2 150 2 198 6" stroke="url(#about-gradient)" strokeWidth="3" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="about-gradient" x1="0" y1="0" x2="200" y2="0">
                                        <stop stopColor="#10b981" />
                                        <stop offset="0.5" stopColor="#14b8a6" />
                                        <stop offset="1" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Desa Tejamulya merupakan desa yang terletak di wilayah yang asri dan sejuk.
                        Dengan masyarakat yang ramah dan penuh semangat gotong royong,
                        kami berkomitmen untuk terus berkembang dan memberikan pelayanan terbaik.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20">
                    {desaInfo.map((info, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-emerald-100/50 hover:border-emerald-200/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                                    <info.icon className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        {info.value}
                                    </span>
                                    {info.suffix && (
                                        <span className="text-sm text-gray-500">{info.suffix}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
                    {/* Left - Image/Illustration */}
                    <div className="relative">
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-2xl blur-xl" />
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl" />

                        {/* Main Card */}
                        <div className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-1 shadow-2xl shadow-emerald-500/20">
                            <div className="bg-white rounded-[22px] p-8 lg:p-10">
                                {/* Desa Illustration */}
                                <div className="relative aspect-square bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex items-center justify-center overflow-hidden">
                                    {/* Abstract Village Illustration */}
                                    <div className="absolute inset-0 flex items-end justify-center pb-8">
                                        {/* Mountains */}
                                        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full">
                                            <svg viewBox="0 0 400 150" className="w-full" fill="none">
                                                <path d="M0 150 L100 50 L150 90 L200 30 L250 80 L300 40 L400 150 Z" fill="url(#mountain-grad)" fillOpacity="0.3" />
                                                <defs>
                                                    <linearGradient id="mountain-grad" x1="0" y1="0" x2="400" y2="150">
                                                        <stop stopColor="#10b981" />
                                                        <stop offset="1" stopColor="#14b8a6" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>

                                        {/* Ground */}
                                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-200/50 to-transparent rounded-b-2xl" />

                                        {/* Trees */}
                                        <div className="absolute bottom-16 left-8">
                                            <TreePine className="w-12 h-12 text-emerald-500/60" />
                                        </div>
                                        <div className="absolute bottom-12 left-20">
                                            <TreePine className="w-8 h-8 text-emerald-400/60" />
                                        </div>
                                        <div className="absolute bottom-16 right-8">
                                            <TreePine className="w-10 h-10 text-teal-500/60" />
                                        </div>
                                        <div className="absolute bottom-14 right-20">
                                            <TreePine className="w-6 h-6 text-teal-400/60" />
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="relative z-10 w-32 h-32 bg-white rounded-3xl shadow-xl shadow-emerald-200/50 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                            <Landmark className="w-10 h-10 text-white" />
                                        </div>
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute top-8 left-8 w-8 h-8 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{ animationDuration: '4s' }}>
                                        <Heart className="w-4 h-4 text-rose-500" />
                                    </div>
                                    <div className="absolute top-12 right-12 w-8 h-8 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                                        <Sparkles className="w-4 h-4 text-amber-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-8">
                        {/* Vision Mission */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                    <Target className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Visi & Misi Desa</h3>
                            </div>

                            <div className="space-y-3 pl-2">
                                {visiMisi.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 group">
                                        <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500 transition-colors duration-300">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location Info */}
                        <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-2xl p-6 border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/25">
                                    <Eye className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Lokasi Strategis</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Terletak di kawasan yang strategis dengan akses mudah ke pusat kota,
                                Desa Tejamulya menawarkan keseimbangan antara kehidupan pedesaan yang asri
                                dan kemudahan akses fasilitas modern.
                            </p>
                            <div className="flex items-center gap-2 text-emerald-600 font-medium">
                                <MapPin className="w-4 h-4" />
                                <span>Kecamatan Argapura, Kabupaten Majalengka</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-emerald-100/50 hover:border-emerald-200/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="relative">
                                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                        <p className="text-gray-600">Punya pertanyaan tentang Desa Tejamulya?</p>
                        <Link
                            href="/chat"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
                        >
                            <span>Tanya SITEJA</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
