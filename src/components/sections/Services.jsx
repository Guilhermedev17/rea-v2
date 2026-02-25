"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scissors, TreePine, Zap, Wrench, Leaf } from 'lucide-react';

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

export default function Services() {
    return (
        <motion.section
            id="services"
            className="py-16 md:py-20 lg:py-24 bg-slate-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="container mx-auto px-4">
                {/* Hero Image Section */}
                <motion.div
                    className="relative mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl min-h-[16rem] md:min-h-[20rem] flex items-center group">
                        <Image
                            src="/vegetation_management_high_quality.jpg"
                            alt="Supressão em vegetação manual"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                        {/* Overlay Gradiente Direcional: Escuro na esquerda (leitura), transparente na direita (beleza) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.95)] via-[rgba(15,23,42,0.7)] to-transparent pointer-events-none"></div>

                        <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-3xl">
                            <motion.div
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 rounded-full mb-4 md:mb-6 shadow-sm">
                                    <Scissors className="w-4 h-4 mr-2" />
                                    <span className="font-semibold tracking-wide text-xs md:text-sm uppercase">
                                        Nossa Especialidade
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight">
                                    Serviços Especializados
                                </h3>

                                <p className="text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
                                    Soluções sustentáveis e integradas para o setor elétrico, sempre priorizando a excelência operacional e o máximo equilíbrio com o meio ambiente.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 group transition-all duration-300 relative flex flex-col items-start"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(16,185,129,0.2)] pointer-events-none -mr-4 -ml-4 -mt-4 -mb-4 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 border border-emerald-500/20"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <TreePine className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />
                        </motion.div>
                        <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight">Supressão em Vegetação Manual</h4>
                        <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Remoção manual especializada de vegetação em faixas de servidão</p>
                    </motion.div>

                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 group transition-all duration-300 relative flex flex-col items-start"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(245,158,11,0.2)] pointer-events-none -mr-4 -ml-4 -mt-4 -mb-4 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 border border-amber-500/20"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Scissors className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                        </motion.div>
                        <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-amber-600 transition-colors leading-tight">Poda e Corte de Árvores</h4>
                        <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Poda e corte de árvores em linha de transmissão e redes de distribuição de energia elétrica</p>
                    </motion.div>

                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 group transition-all duration-300 relative flex flex-col items-start"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(14,165,233,0.2)] pointer-events-none -mr-4 -ml-4 -mt-4 -mb-4 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 bg-sky-500/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 border border-sky-500/20"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Zap className="w-6 h-6 md:w-8 md:h-8 text-sky-600" />
                        </motion.div>
                        <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-sky-600 transition-colors leading-tight">Recuperação de Acesso em Vegetação</h4>
                        <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Recuperação de acesso em vegetação, aterramento e seccionamento de cercas</p>
                    </motion.div>

                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 group transition-all duration-300 relative flex flex-col items-start"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(139,92,246,0.2)] pointer-events-none -mr-4 -ml-4 -mt-4 -mb-4 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 bg-violet-500/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 border border-violet-500/20"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Wrench className="w-6 h-6 md:w-8 md:h-8 text-violet-600" />
                        </motion.div>
                        <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-violet-600 transition-colors leading-tight">Consertos de Porteiras</h4>
                        <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Consertos especializados de porteiras e colchetes</p>
                    </motion.div>
                </motion.div>

                {/* Environmental Commitment */}
                <div className="relative">
                    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-emerald-950 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl border border-white/5">
                        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-16 md:-translate-y-32 translate-x-16 md:translate-x-32 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-blue-500/10 rounded-full blur-3xl translate-y-12 md:translate-y-24 -translate-x-12 md:-translate-x-24 pointer-events-none"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
                            <div className="flex-1">
                                <div className="flex items-center mb-4 md:mb-6">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center mr-4 md:mr-5 border border-white/10 shadow-inner">
                                        <Leaf className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">Compromisso Ambiental</h3>
                                </div>
                                <p className="text-base md:text-lg opacity-80 leading-relaxed max-w-3xl">
                                    Todos os nossos serviços são realizados com foco na preservação ambiental, garantindo o equilíbrio perfeito entre a manutenção da infraestrutura elétrica e a proteção do meio ambiente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
