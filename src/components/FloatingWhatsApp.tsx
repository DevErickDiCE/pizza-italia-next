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
                    href="https://wa.me/34617974474?text=¡Hola!%20Quiero%20hacer%20un%20pedido"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-[0_5px_30px_rgba(37,211,102,0.4)] border border-white/20"
                >
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-bold hidden md:inline-block">Hacer Pedido</span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
