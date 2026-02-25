"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

export default function Clients() {
    const logos = [
        { src: "/edp_logo_improved.png", alt: "EDP" },
        { src: "/neoenergia_logo_sem_fundo.png", alt: "Neoenergia" },
        { src: "/santa_maria_logo_new_transparent.png", alt: "Santa Maria" },
        { src: "/linhares_geracao_logo_sem_fundo.png", alt: "Linhares Geração" },
        { src: "/tropicalia_logo_official.png", alt: "Tropicalia Transmissora" }
    ];

    return (
        <motion.section
            id="clients"
            className="py-16 md:py-20 lg:py-24 bg-slate-50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div variants={scaleIn}>
                            <div className="inline-flex items-center px-5 py-2.5 bg-white/40 backdrop-blur-md border border-gray-200/50 text-emerald-700 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-4">
                                <Users className="w-4 h-4 mr-2" />
                                <span className="font-semibold text-sm tracking-wide">Nossos Clientes</span>
                            </div>
                        </motion.div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                            Parcerias de Sucesso
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0">
                            A confiança nos nossos serviços geraram parcerias de muito sucesso
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="relative overflow-hidden py-8 md:py-12 logos-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Gradientes de fade nas laterais - mais largos para cobrir nascimento/morte do infinito */}
                    <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                    <div className="animate-scroll-logos flex items-center gap-12 md:gap-24 px-4">
                        {/* Array quadruplicado para garantir o scroll contínuo e perfeito até em telas Ultrawide */}
                        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center w-[140px] md:w-[180px] h-20 md:h-24 flex-shrink-0 relative group"
                            >
                                <div className="relative w-full h-full transition-all duration-500 hover:scale-110 cursor-pointer">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        sizes="(max-width: 768px) 140px, 180px"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
