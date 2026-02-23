'use client';

import { motion } from 'framer-motion';

export function PromoViernes() {
    return (
        <section
            className="pt-32 pb-16 md:pt-40 md:pb-24 text-center relative overflow-hidden"
            style={{
                background: 'radial-gradient(circle at center, #151515 0%, #0a0a0a 40%, #000000 75%)'
            }}
        >

            <div className="relative z-10 max-w-6xl mx-auto px-6">

                {/* Top Italian tricolor line */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 0.8, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="mx-auto w-56 md:w-72 h-[2px] rounded-full mb-14"
                    style={{
                        background: 'linear-gradient(to right, #166534, #22c55e, #ffffff, #ef4444, #b91c1c)'
                    }}
                />

                {/* Whisper label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-xs md:text-sm tracking-[0.6em] text-white/50 uppercase mb-14"
                >
                    Solo los viernes
                </motion.p>

                {/* 3+1 - GIGANTE */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black leading-none text-[#d62828] mb-14"
                    style={{
                        textShadow: '0 0 60px rgba(214, 40, 40, 0.4), 0 0 100px rgba(214, 40, 40, 0.2)',
                        letterSpacing: '-0.03em'
                    }}
                >
                    3<span className="text-[6rem] md:text-[9rem] lg:text-[12rem] mx-2 align-middle">+</span>1
                </motion.h2>

                {/* Subtitle Line 1 */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-sm md:text-lg tracking-[0.3em] md:tracking-[0.5em] text-white/70 uppercase mb-4"
                >
                    Compras 3 pizzas familiares
                </motion.p>

                {/* Subtitle Line 2 */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-sm md:text-lg tracking-[0.3em] md:tracking-[0.5em] text-white/70 uppercase mb-16"
                >
                    Y te regalamos una mediana
                </motion.p>

                {/* Italian tricolor line - bottom */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 0.8, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="mx-auto w-56 md:w-72 h-[2px] rounded-full"
                    style={{
                        background: 'linear-gradient(to right, #166534, #22c55e, #ffffff, #ef4444, #b91c1c)'
                    }}
                />

            </div>

        </section>
    );
}
