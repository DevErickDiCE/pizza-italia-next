'use client';

import { motion } from 'framer-motion';
import { PizzaCard } from './PizzaCard';
import { Pizza } from '@/types/menu';

interface PizzaGridProps {
    pizzas: Pizza[];
}

export function PizzaGrid({ pizzas }: PizzaGridProps) {
    return (
        <section id="menu" className="relative py-24 bg-neutral-950">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-7xl mb-4 text-[#d4b76a]"
                    >
                        NUESTRO MENÚ
                    </motion.h2>
                    <div className="w-24 h-1 bg-[#d4b76a] mx-auto rounded-full" />
                </div>

                {/* Grid */}
                <div className="pizza-grid max-w-[1600px] mx-auto px-4">
                    {pizzas.map((pizza, index) => (
                        <PizzaCard
                            key={pizza.id}
                            pizza={pizza}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
