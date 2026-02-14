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
                className="object-cover object-center opacity-90"
                priority
                quality={95}
            />

            {/* Simple Dark Overlay - No complex gradients to avoid banding lines */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Bottom Fade - Simple 2-stop gradient */}
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
                        className="w-[550px] md:w-[900px] h-auto drop-shadow-2xl"
                        priority
                    />
                </motion.div>

                {/* Tagline - BOLD & POWERFUL - No Serif */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-xl md:text-3xl tracking-[0.4em] uppercase font-black mb-40 text-center relative z-20"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
                >
                    Auténtica cocina italiana
                </motion.h2>

                {/* Buttons - RECTANGULAR BLOCKS - MASSIVE TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-16 w-full relative z-20"
                >
                    {/* Primary Button - White Block */}
                    <a
                        href="https://wa.me/34617974474?text=¡Hola!%20Quiero%20hacer%20una%20reserva"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto min-w-[360px] px-14 py-7 bg-white text-black font-black tracking-widest text-2xl md:text-3xl uppercase text-center hover:bg-neutral-200 transition-transform hover:scale-105 shadow-2xl rounded-sm border-none ring-0 outline-none block"
                        style={{ textDecoration: 'none' }}
                    >
                        Reservar mesa
                    </a>

                    {/* Secondary Button - Black Block */}
                    <a
                        href="#menu"
                        className="w-full md:w-auto min-w-[360px] px-14 py-7 bg-black text-white font-black tracking-widest text-2xl md:text-3xl uppercase text-center hover:bg-neutral-900 transition-transform hover:scale-105 shadow-2xl rounded-sm border-none ring-0 outline-none block"
                        style={{ textDecoration: 'none' }}
                    >
                        Ver carta
                    </a>
                </motion.div>
            </div>

        </section>
    );
}
