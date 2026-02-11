'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Pizza } from '@/types/menu';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Mapa corregido de imágenes
const imageMap: Record<string, string> = {
    'margarita': 'pizza_margherita_1770420145200.png',
    'napoli': 'pizza_margherita_1770420145200.png',
    'especial': 'pizza_pepperoni_1770420158914.png',
    'salami': 'pizza_pepperoni_1770420158914.png',
    'de-la-casa': 'pizza_pepperoni_1770420158914.png',
    'diavolo': 'pizza_diavola_1770420187032.png',
    'mediterranea': 'pizza_diavola_1770420187032.png',
    'oriental': 'pizza_diavola_1770420187032.png',
    'vegetariana': 'pizza_vegetariana_1770420214358.png',
    'marinera': 'pizza_vegetariana_1770420214358.png',
    'hawaiana': 'pizza_prosciutto_1770420200743.png',
    'serrano': 'pizza_prosciutto_1770420200743.png',
    'cuatro-quesos': 'pizza_quattro_formaggi_1770420172300.png',
    'romana': 'pizza_quattro_formaggi_1770420172300.png',
};

interface PizzaCardProps {
    pizza: Pizza;
    index: number;
}

export function PizzaCard({ pizza, index }: PizzaCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const imagePath = imageMap[pizza.id]
        ? `/images/${imageMap[pizza.id]}`
        : (pizza.image || '/images/pizza_margherita_1770420145200.png');

    const isPasta = !!pizza.prices.plato;
    const ingredients = pizza.ingredients.includes('·')
        ? pizza.ingredients
        : pizza.ingredients.split(',').map(i => i.trim()).join(' • ');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group flex flex-col items-center w-full max-w-[300px] mx-auto"
        >
            {/* Circular Image Container (Masks the square image) */}
            <div className={`relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-2 border-[#d4b76a]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_50px_rgba(212,183,106,0.2)] group-hover:border-[#d4b76a]/60 group-hover:scale-105 transition-all duration-500 z-20 bg-black ${isPasta ? 'border-none ring-2 ring-[#d4b76a]/20' : ''}`}>
                <Image
                    src={imagePath}
                    alt={pizza.name}
                    width={240}
                    height={240}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:rotate-3 group-hover:scale-110"
                    priority={index < 6}
                />
            </div>

            {/* Floating Text Info */}
            <div className="mt-8 text-center z-10 flex flex-col items-center w-full px-2">

                {/* Clickable Title Area */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col items-center justify-center cursor-pointer group/title"
                >
                    <div className="flex items-center gap-2">
                        <h3 className="font-display text-4xl text-[#d4b76a] tracking-wide drop-shadow-md group-hover/title:text-white transition-colors duration-300">
                            {pizza.name}
                        </h3>
                        {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-[#d4b76a]/70" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-[#d4b76a]/70 group-hover/title:text-white transition-colors duration-300" />
                        )}
                    </div>

                    <div className={`w-8 h-0.5 bg-[#d4b76a] rounded-full transition-all duration-500 my-3 ${isOpen ? 'w-24 bg-white/80' : 'group-hover:w-24 group-hover:bg-white/80'}`}></div>
                </div>

                {/* Ingredients Dropdown - Minimalist */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden mb-4"
                        >
                            <p className="text-sm text-white/70 tracking-wide font-light max-w-[260px] mx-auto leading-relaxed">
                                {ingredients}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {isPasta ? (
                    <div className="flex justify-center items-center w-full mt-1">
                        <div className="flex flex-col items-center group/price">
                            <span className="text-lg font-display text-[#d4b76a] mb-2 tracking-widest">PLATO</span>
                            <span className="text-3xl font-display text-white tracking-wider">
                                {pizza.prices.plato?.toFixed(2)}<span className="text-xl align-top ml-1">€</span>
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center w-full mt-1" style={{ gap: '1.5rem' }}>
                        <div className="flex flex-col items-center group/price">
                            <span className="text-lg font-display text-[#d4b76a] mb-2 tracking-widest">M</span>
                            <span className="text-3xl font-display text-white tracking-wider">
                                {pizza.prices.mediana?.toFixed(2)}<span className="text-xl align-top ml-1">€</span>
                            </span>
                        </div>

                        <div className="w-px h-12 bg-[#d4b76a]/50 mx-2"></div>

                        <div className="flex flex-col items-center group/price">
                            <span className="text-lg font-display text-[#d4b76a] mb-2 tracking-widest">F</span>
                            <span className="text-3xl font-display text-white tracking-wider">
                                {pizza.prices.familiar?.toFixed(2)}<span className="text-xl align-top ml-1">€</span>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}