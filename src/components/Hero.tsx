'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black border-none outline-none">

            {/* Background Image - Clean */}
            <Image
                src="/images/pizza_margherita_1770420145200.png"
                alt="Pizza artesanal italiana"
                fill
                className="object-cover object-center opacity-85"
                priority
                quality={95}
            />

            {/* Simple Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Cinematic Gradient - Adds depth to lower section */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto w-full">

                {/* Logo XXL */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-14"
                >
                    <Image
                        src="/logo.png"
                        alt="Pizza Italia Logo"
                        width={900}
                        height={600}
                        className="w-[600px] md:w-[980px] max-w-full h-auto drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                        priority
                    />
                </motion.div>

                {/* Tagline - BOLD & POWERFUL - No Serif */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-3xl md:text-5xl lg:text-6xl tracking-[0.3em] uppercase font-black mb-24 py-4 text-center relative z-20"
                    style={{ textShadow: '0 4px 40px rgba(0,0,0,1)' }}
                >
                    Auténtica cocina italiana
                </motion.h2>

                {/* CTAs — Elegant floating text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center gap-10 relative z-20"
                >
                    <a
                        href="https://wa.me/34617974474?text=¡Hola!%20Quiero%20hacer%20una%20reserva"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative"
                        style={{
                            color: '#ffffff',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            fontSize: '0.95rem',
                            textTransform: 'uppercase' as const,
                            textDecoration: 'none',
                            textShadow: '0 2px 20px rgba(0,0,0,0.8)',
                            transition: 'all 0.4s ease',
                            cursor: 'pointer',
                            paddingBottom: '4px',
                            borderBottom: '1px solid rgba(255,255,255,0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderBottom = '2px solid rgba(255,255,255,1)';
                            e.currentTarget.style.textShadow = '0 0 30px rgba(255,255,255,0.6)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderBottom = '1px solid rgba(255,255,255,0.3)';
                            e.currentTarget.style.textShadow = '0 2px 20px rgba(0,0,0,0.8)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Reservar mesa
                    </a>

                    {/* Decorative separator */}
                    <div
                        style={{
                            width: '40px',
                            height: '1px',
                            background: 'rgba(255,255,255,0.35)',
                        }}
                    />

                    <a
                        href="#menu"
                        className="group relative"
                        style={{
                            color: '#ffffff',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            fontSize: '0.95rem',
                            textTransform: 'uppercase' as const,
                            textDecoration: 'none',
                            textShadow: '0 2px 20px rgba(0,0,0,0.8)',
                            transition: 'all 0.4s ease',
                            cursor: 'pointer',
                            paddingBottom: '4px',
                            borderBottom: '1px solid rgba(255,255,255,0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderBottom = '2px solid rgba(255,255,255,1)';
                            e.currentTarget.style.textShadow = '0 0 30px rgba(255,255,255,0.6)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderBottom = '1px solid rgba(255,255,255,0.3)';
                            e.currentTarget.style.textShadow = '0 2px 20px rgba(0,0,0,0.8)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Ver carta
                    </a>
                </motion.div>
            </div>

        </section>
    );
}
