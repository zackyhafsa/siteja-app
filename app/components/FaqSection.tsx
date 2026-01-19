'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle, MessageCircle, ShieldCheck } from 'lucide-react'

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "Apa itu SITEJA?",
            answer: "SITEJA (Sistem Informasi Tejamulya) adalah asisten virtual berbasis AI yang dirancang untuk memudahkan warga Desa Tejamulya mengakses informasi layanan publik, jadwal kegiatan, dan bantuan sosial secara cepat dan akurat selama 24 jam."
        },
        {
            question: "Apakah layanan ini berbayar?",
            answer: "Tidak. Layanan Chatbot SITEJA 100% GRATIS untuk seluruh warga Desa Tejamulya. Anda bisa menggunakannya kapan saja tanpa biaya berlangganan apapun."
        },
        {
            question: "Bagaimana cara mengurus dokumen kependudukan?",
            answer: "Anda cukup menanyakan dokumen yang ingin diurus (contoh: 'syarat KTP', 'surat pindah') di kolom chat. SITEJA akan memberikan daftar persyaratan lengkap dan panduan langkah demi langkah sesuai peraturan desa terbaru."
        },
        {
            question: "Apakah data percakapan saya aman?",
            answer: "Ya, privasi Anda adalah prioritas kami. Kami tidak menyimpan data pribadi sensitif dalam percakapan publik. Sistem kami dilengkapi dengan enkripsi keamanan standar untuk melindungi interaksi Anda."
        },
        {
            question: "Apa yang harus dilakukan jika bot tidak menjawab?",
            answer: "Jika SITEJA belum memiliki jawaban yang Anda cari, silakan hubungi perangkat desa secara langsung melalui kontak WhatsApp resmi yang tersedia di bagian kontak, atau datang langsung ke Balai Desa pada jam kerja."
        }
    ]

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="relative py-24 bg-gray-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-emerald-50 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-teal-50 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-emerald-700 text-sm font-medium shadow-sm mb-6">
                        <HelpCircle className="w-4 h-4" />
                        <span>Pusat Bantuan</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Pertanyaan yang Sering{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                            Diajukan
                        </span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Temukan jawaban cepat untuk pertanyaan umum seputar layanan Desa Tejamulya.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-2xl border transition-all duration-300 ${openIndex === index
                                    ? 'border-emerald-200 shadow-lg shadow-emerald-500/5'
                                    : 'border-gray-200 hover:border-emerald-200/50 hover:shadow-md'
                                }`}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-emerald-700' : 'text-gray-900 group-hover:text-emerald-700'
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                        ? 'bg-emerald-100 text-emerald-600 rotate-180'
                                        : 'bg-gray-100 text-gray-500 group-hover:bg-emerald-50 group-hover:text-emerald-600'
                                    }`}>
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4" />
                                    ) : (
                                        <Plus className="w-4 h-4" />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                                        <div className="w-full h-px bg-gray-100 mb-4" />
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-semibold text-gray-900">Masih punya pertanyaan?</p>
                                <p className="text-xs text-gray-500">Kami siap membantu Anda</p>
                            </div>
                        </div>
                        <div className="h-px w-full sm:w-px sm:h-8 bg-gray-200" />
                        <a
                            href="/chat"
                            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                        >
                            Hubungi Tim Support &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection
