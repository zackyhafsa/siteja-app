'use client'

import { Sparkles, User, Copy, Check, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MessageCardProps {
    role: 'user' | 'assistant'
    content: string
    timestamp?: Date
    isLoading?: boolean
}

const MessageCard = ({ role, content, isLoading = false }: MessageCardProps) => {
    const [copied, setCopied] = useState(false)
    const isUser = role === 'user'

    const handleCopy = async () => {
        await navigator.clipboard.writeText(content)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (isUser) {
        return (
            <div className="flex justify-end">
                <div className="max-w-[85%] sm:max-w-[70%]">
                    <div className="bg-emerald-600 text-white px-4 py-2.5 rounded-2xl rounded-br-sm">
                        <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{content}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex gap-3">
            {/* AI Avatar */}
            <div className="shrink-0">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                </div>
            </div>

            {/* AI Message */}
            <div className="flex-1 max-w-[85%] sm:max-w-[75%]">
                <div className="group">
                    {/* Loading State */}
                    {isLoading ? (
                        <div className="flex items-center gap-1 py-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    ) : (
                        <>
                            {/* Message Content */}
                            <div className="text-[15px] text-gray-800 leading-relaxed">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
                                        strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                                        ul: ({ children }) => <ul className="list-disc list-outside ml-4 mb-2 space-y-1">{children}</ul>,
                                        ol: ({ children }) => <ol className="list-decimal list-outside ml-4 mb-2 space-y-1">{children}</ol>,
                                        li: ({ children }) => <li className="pl-1">{children}</li>,
                                        h1: ({ children }) => <h1 className="text-xl font-bold text-gray-900 mt-4 mb-2">{children}</h1>,
                                        h2: ({ children }) => <h2 className="text-lg font-bold text-gray-900 mt-4 mb-2">{children}</h2>,
                                        h3: ({ children }) => <h3 className="font-bold text-gray-900 mt-3 mb-1">{children}</h3>,
                                        code: ({ className, children }) => {
                                            const match = /language-(\w+)/.exec(className || '')
                                            const isInline = !match && !className
                                            return isInline ? (
                                                <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-emerald-800 font-medium">{children}</code>
                                            ) : (
                                                <div className="relative my-3 rounded-lg bg-gray-900 p-4 text-gray-100 overflow-x-auto">
                                                    <code className="text-sm font-mono">{children}</code>
                                                </div>
                                            )
                                        },
                                        blockquote: ({ children }) => <blockquote className="border-l-4 border-emerald-200 pl-4 py-1 my-2 text-gray-600 italic">{children}</blockquote>,
                                    }}
                                >
                                    {content}
                                </ReactMarkdown>
                            </div>

                            {/* Action Buttons */}
                            {content && (
                                <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <button
                                        onClick={handleCopy}
                                        className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                        title={copied ? 'Tersalin!' : 'Salin'}
                                    >
                                        {copied ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

// Typing Indicator Component
export const TypingIndicator = () => {
    return (
        <div className="flex gap-3">
            <div className="shrink-0">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                </div>
            </div>
            <div className="flex items-center gap-1 py-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
        </div>
    )
}

// Welcome Message Component
interface WelcomeMessageProps {
    onSuggestionClick?: (suggestion: string) => void
}

export const WelcomeMessage = ({ onSuggestionClick }: WelcomeMessageProps) => {
    const suggestions = [
        { text: 'Cara mengurus KTP', icon: '🪪' },
        { text: 'Syarat surat domisili', icon: '📄' },
        { text: 'Jam operasional desa', icon: '🕐' },
        { text: 'Info bantuan sosial', icon: '💰' },
    ]

    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            {/* Logo */}
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-emerald-600" />
            </div>

            {/* Welcome Text */}
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Ada yang bisa dibantu?
            </h2>
            <p className="text-gray-500 text-sm text-center max-w-sm mb-8">
                Saya SITEJA, asisten virtual Desa Tejamulya yang siap menjawab pertanyaan Anda.
            </p>

            {/* Suggestion Cards */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-2">
                {suggestions.map((suggestion, index) => (
                    <button
                        key={index}
                        onClick={() => onSuggestionClick?.(suggestion.text)}
                        className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200 text-left"
                    >
                        <span className="text-base">{suggestion.icon}</span>
                        <span className="text-gray-600 font-medium">{suggestion.text}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MessageCard
