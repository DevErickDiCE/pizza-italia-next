'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="https://wa.me/34672805740?text=¡Hola!%20Quiero%20hacer%20un%20pedido"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 text-white p-4 rounded-full border border-[#d4b76a]/30"
                    style={{
                        background: 'linear-gradient(135deg, #d4b76a 0%, #b59b5a 100%)',
                        boxShadow: '0 4px 25px rgba(212, 183, 106, 0.4)'
                    }}
                >
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-bold hidden md:inline-block tracking-wider text-sm uppercase">Pide Ahora</span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
