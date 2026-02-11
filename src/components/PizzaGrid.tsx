'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PizzaCard } from './PizzaCard';
import { Pizza } from '@/types/menu';
import { ChevronDown } from 'lucide-react';

interface PizzaGridProps {
    pizzas: Pizza[];
    pastas?: Pizza[];
}

export function PizzaGrid({ pizzas, pastas = [] }: PizzaGridProps) {
    const [showPastas, setShowPastas] = useState(false);

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

                {/* Pizza Grid */}
                <div className="pizza-grid max-w-[1600px] mx-auto px-4 mb-24">
                    {pizzas.map((pizza, index) => (
                        <PizzaCard
                            key={pizza.id}
                            pizza={pizza}
                            index={index}
                        />
                    ))}
                </div>

                {/* Pastas Section - Collapsible */}
                {pastas.length > 0 && (
                    <div className="max-w-[1600px] mx-auto px-4 text-center">
                        <div
                            onClick={() => setShowPastas(!showPastas)}
                            className="group flex flex-col items-center mx-auto cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <h3 className="font-display text-4xl md:text-5xl text-[#d4b76a] group-hover:text-white transition-colors duration-300 drop-shadow-md tracking-wide">
                                    PASTAS
                                </h3>
                                <ChevronDown
                                    className={`w-8 h-8 text-[#d4b76a] transition-transform duration-500 ${showPastas ? 'rotate-180' : 'group-hover:translate-y-2'}`}
                                />
                            </div>
                            <div className={`w-8 h-0.5 bg-[#d4b76a] rounded-full transition-all duration-500 my-4 ${showPastas ? 'w-32 bg-white/80' : 'group-hover:w-32 group-hover:bg-white/80'}`}></div>
                        </div>

                        <AnimatePresence>
                            {showPastas && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pizza-grid pt-16 pb-8">
                                        {pastas.map((pasta, index) => (
                                            <PizzaCard
                                                key={pasta.id}
                                                pizza={pasta}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </section>
    );
}
