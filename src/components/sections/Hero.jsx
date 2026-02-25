"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import EmpresaCarousel from '@/components/ui/EmpresaCarousel';

// Variantes de animação
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function Hero() {
    return (
        <motion.section
            id="home"
            className="relative py-16 md:py-20 lg:py-28 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    <motion.div
                        className="space-y-6 md:space-y-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="space-y-3 md:space-y-4">
                            <motion.div variants={scaleIn}>
                                <div className="inline-flex items-center px-5 py-2.5 bg-white/40 backdrop-blur-md border border-gray-200/50 text-emerald-700 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] hover:bg-white/60 transition-all duration-500 hover:-translate-y-1">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    >
                                        <Leaf className="w-4 h-4 mr-2" />
                                    </motion.div>
                                    <span className="font-semibold text-sm tracking-wide">Empresa Amiga da Natureza</span>
                                </div>
                            </motion.div>
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight"
                                variants={fadeInUp}
                            >
                                R<span className="text-orange-500">&</span>A Serviços e <br className="hidden sm:block" />
                                Manutenções Elétricas
                            </motion.h1>
                            <motion.p
                                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
                                variants={fadeInUp}
                            >
                                Especializada em prestação de serviços de intervenção em vegetação em linha de transmissão
                                e redes de distribuição de MT/BT, oferecendo soluções seguras e sustentáveis para o setor elétrico.
                            </motion.p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <EmpresaCarousel />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
