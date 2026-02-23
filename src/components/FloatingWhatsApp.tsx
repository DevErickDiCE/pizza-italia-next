'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <a
            href="https://wa.me/34672805740?text=¡Hola!%20Quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '1.5rem',
                right: '1.5rem',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'white',
                padding: '1rem',
                borderRadius: '9999px',
                border: '1px solid rgba(212, 183, 106, 0.3)',
                background: 'linear-gradient(135deg, #d4b76a 0%, #b59b5a 100%)',
                boxShadow: '0 4px 25px rgba(212, 183, 106, 0.4)',
                textDecoration: 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0) translateY(20px)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
        >
            <MessageCircle style={{ width: '1.5rem', height: '1.5rem' }} />
            <span
                style={{
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                }}
                className="hidden md:inline-block"
            >
                Pide Ahora
            </span>
        </a>
    );
}
