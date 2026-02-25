"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
};

export default function Clients() {
    const logos = [
        { src: "/edp_logo_improved.png", alt: "EDP" },
        { src: "/neoenergia_logo_nova_versao.png", alt: "Neoenergia" },
        { src: "/santa_maria_logo_new_transparent.png", alt: "Santa Maria" },
        { src: "/linhares_geracao_logo_new_transparent.png", alt: "Linhares Geração" },
        { src: "/tropicalia_logo_official.png", alt: "Tropicalia Transmissora" }
    ];

    return (
        <motion.section
            id="clients"
            className="py-12 md:py-16 lg:py-20 bg-gray-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={scaleIn}>
                        <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 mb-4">
                            <Users className="w-4 h-4 mr-2" />
                            <span className="font-semibold">Nossos Clientes</span>
                        </div>
                    </motion.div>
                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4"
                        variants={fadeInUp}
                    >
                        Parcerias de Sucesso
                    </motion.h2>
                    <motion.p
                        className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0"
                        variants={fadeInUp}
                    >
                        A confiança nos nossos serviços geraram parcerias de muito sucesso
                    </motion.p>
                </motion.div>

                <motion.div
                    className="relative overflow-hidden py-6 md:py-8 logos-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {/* Gradientes de fade nas laterais - mais suaves */}
                    <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>

                    <div className="animate-scroll-logos">
                        {/* Array de logos otimizado - duplicado para scroll contínuo */}
                        {logos.concat(logos).map((logo, index) => (
                            <motion.div
                                key={index}
                                className="flex justify-center items-center p-4 md:p-6 lg:p-8 bg-white rounded-xl md:rounded-2xl shadow-sm min-w-[180px] md:min-w-[240px] h-24 md:h-32 mx-2 md:mx-4 group flex-shrink-0 relative overflow-hidden"
                                whileHover={{
                                    scale: 1.02,
                                    y: -4,
                                    boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <div className="relative w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        sizes="(max-width: 768px) 180px, 240px"
                                        className="object-contain p-2"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
