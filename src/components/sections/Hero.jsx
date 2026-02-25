"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import EmpresaCarousel from '@/components/ui/EmpresaCarousel';

// Variantes de animação
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

export default function Hero() {
    return (
        <motion.section
            id="home"
            className="relative py-16 md:py-20 lg:py-28 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="space-y-6 md:space-y-8" variants={fadeInUp}>
                        <motion.div className="space-y-3 md:space-y-4" variants={staggerContainer}>
                            <motion.div variants={scaleIn}>
                                <div className="inline-flex items-center px-5 py-2.5 bg-white/40 backdrop-blur-md border border-white/50 text-emerald-800 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] hover:bg-white/60 transition-all duration-500 hover:-translate-y-1">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                        className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-1.5 mr-3 shadow-sm"
                                    >
                                        <Leaf className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <span className="font-semibold text-sm tracking-wide">Empresa Amiga da Natureza</span>
                                </div>
                            </motion.div>
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                                variants={fadeInUp}
                            >
                                R<motion.span className="text-orange-500">&</motion.span>A Serviços e
                                <motion.span
                                    className="text-gray-900 inline-block"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                > &nbsp;Manutenções </motion.span>
                                <motion.span
                                    className="text-gray-900 inline-block"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.4, duration: 0.5 }}
                                >Elétricas</motion.span>
                            </motion.h1>
                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                                variants={fadeInUp}
                            >
                                Especializada em prestação de serviços de intervenção em vegetação em linha de transmissão
                                e redes de distribuição de MT/BT, oferecendo soluções seguras e sustentáveis para o setor elétrico.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        variants={fadeInUp}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <EmpresaCarousel />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
