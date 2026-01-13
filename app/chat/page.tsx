'use client';

import { useChat } from '@ai-sdk/react';
import { useState, useEffect, useRef } from 'react';
import {
    Send,
    Trash2,
    MessageCircle,
    ArrowLeft,
    MoreVertical,
    X
} from 'lucide-react';
import Link from 'next/link';
import MessageCard, { TypingIndicator, WelcomeMessage } from '../components/MessageCard';
import type { UIMessage } from '@ai-sdk/react';

const STORAGE_KEY = 'siteja-chat-history';

// Helper to serialize messages for localStorage
const serializeMessages = (messages: UIMessage[]) => {
    return JSON.stringify(messages.map(msg => ({
        id: msg.id,
        role: msg.role,
        parts: msg.parts,
    })));
};

// Helper to deserialize messages from localStorage
const deserializeMessages = (stored: string): UIMessage[] => {
    try {
        return JSON.parse(stored);
    } catch {
        return [];
    }
};

export default function Chat() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [storedMessages, setStoredMessages] = useState<UIMessage[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Load messages from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = deserializeMessages(saved);
            setStoredMessages(parsed);
        }
        setIsLoaded(true);
    }, []);

    const { messages, sendMessage, status, setMessages } = useChat();

    const isLoading = status === 'streaming' || status === 'submitted';

    // Sync stored messages to useChat on initial load
    useEffect(() => {
        if (isLoaded && storedMessages.length > 0 && messages.length === 0) {
            setMessages(storedMessages);
        }
    }, [isLoaded, storedMessages, messages.length, setMessages]);

    // Save messages to localStorage whenever they change
    useEffect(() => {
        if (isLoaded && messages.length > 0) {
            localStorage.setItem(STORAGE_KEY, serializeMessages(messages));
        }
    }, [messages, isLoaded]);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    // Handle delete chat
    const handleDeleteChat = () => {
        localStorage.removeItem(STORAGE_KEY);
        setMessages([]);
        setStoredMessages([]);
        setShowDeleteConfirm(false);
        setShowMenu(false);
    };

    // Handle form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() && !isLoading) {
            sendMessage({ text: inputValue });
            setInputValue('');
            if (inputRef.current) {
                inputRef.current.style.height = 'auto';
            }
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = (suggestion: string) => {
        if (!isLoading) {
            sendMessage({ text: suggestion });
        }
    };

    // Handle textarea auto-resize
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
    };

    // Handle Enter key (submit on Enter, new line on Shift+Enter)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (inputValue.trim() && !isLoading) {
                sendMessage({ text: inputValue });
                setInputValue('');
                if (inputRef.current) {
                    inputRef.current.style.height = 'auto';
                }
            }
        }
    };

    // Get message content helper
    const getMessageContent = (message: UIMessage): string => {
        if (message.parts) {
            return message.parts
                .filter((part): part is { type: 'text'; text: string } => part.type === 'text')
                .map((part) => part.text)
                .join('');
        }
        return '';
    };

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-gray-600">Memuat chat...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 flex flex-col">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Left - Back Button & Logo */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                                <MessageCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h1 className="font-bold text-gray-900">SITEJA Chat</h1>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className="text-xs text-gray-500">Online</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Menu */}
                    <div className="relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors duration-200"
                        >
                            <MoreVertical className="w-5 h-5" />
                        </button>

                        {/* Dropdown Menu */}
                        {showMenu && (
                            <>
                                <div
                                    className="fixed inset-0 z-10"
                                    onClick={() => setShowMenu(false)}
                                />
                                <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20">
                                    <button
                                        onClick={() => {
                                            setShowDeleteConfirm(true);
                                            setShowMenu(false);
                                        }}
                                        disabled={messages.length === 0}
                                        className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        <span>Hapus Riwayat Chat</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setShowDeleteConfirm(false)}
                    />
                    <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
                        <button
                            onClick={() => setShowDeleteConfirm(false)}
                            className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Trash2 className="w-6 h-6 text-red-600" />
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                            Hapus Riwayat Chat?
                        </h3>
                        <p className="text-sm text-gray-600 text-center mb-6">
                            Semua percakapan akan dihapus permanen dan tidak dapat dikembalikan.
                        </p>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowDeleteConfirm(false)}
                                className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-200"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleDeleteChat}
                                className="flex-1 px-4 py-2.5 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition-colors duration-200"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Messages Area */}
            <main className="flex-1 pt-20 pb-32">
                <div className="max-w-4xl mx-auto">
                    {messages.length === 0 ? (
                        <WelcomeMessage onSuggestionClick={handleSuggestionClick} />
                    ) : (
                        <div className="space-y-6 py-6">
                            {messages.map((message) => (
                                <MessageCard
                                    key={message.id}
                                    role={message.role as 'user' | 'assistant'}
                                    content={getMessageContent(message)}
                                />
                            ))}

                            {isLoading && <TypingIndicator />}

                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>
            </main>

            {/* Input Area */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <form
                        id="chat-form"
                        onSubmit={handleSubmit}
                        className="flex items-end gap-3"
                    >
                        <div className="flex-1 relative">
                            <textarea
                                ref={inputRef}
                                value={inputValue}
                                onChange={handleTextareaChange}
                                onKeyDown={handleKeyDown}
                                placeholder="Ketik pertanyaan Anda..."
                                rows={1}
                                className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                                style={{ minHeight: '48px', maxHeight: '120px' }}
                            />
                            <div className="absolute right-3 bottom-2.5 text-xs text-gray-400">
                                {inputValue.length > 0 && `${inputValue.length}/1000`}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isLoading}
                            className="w-12 h-12 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <Send className="w-5 h-5" />
                            )}
                        </button>
                    </form>

                    <p className="text-xs text-gray-400 text-center mt-3">
                        SITEJA dapat membuat kesalahan. Verifikasi informasi penting.
                    </p>
                </div>
            </footer>
        </div>
    );
}