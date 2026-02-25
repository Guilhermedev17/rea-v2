"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scissors, TreePine, Zap, Wrench, Leaf } from 'lucide-react';

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

export default function Services() {
    return (
        <motion.section
            id="services"
            className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="container mx-auto px-4">
                {/* Hero Image Section */}
                <motion.div
                    className="relative mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl min-h-[16rem] md:min-h-[20rem] flex items-center group">
                        <Image
                            src="/vegetation_management_high_quality.jpg"
                            alt="Supressão em vegetação manual"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent pointer-events-none"></div>

                        <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-3xl">
                            <motion.div
                                variants={staggerContainer}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.div variants={fadeInUp} className="flex items-center space-x-4 mb-4 md:mb-6">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20">
                                        <Scissors className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                                    </div>
                                    <span className="text-emerald-400 font-semibold tracking-wider text-sm md:text-base uppercase">
                                        Nossa Especialidade
                                    </span>
                                </motion.div>

                                <motion.h3
                                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight"
                                    variants={fadeInUp}
                                >
                                    Serviços Especializados
                                </motion.h3>

                                <motion.p
                                    className="text-sm md:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed"
                                    variants={fadeInUp}
                                >
                                    Soluções sustentáveis e integradas para o setor elétrico, sempre priorizando a excelência operacional e o máximo equilíbrio com o meio ambiente.
                                </motion.p>
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
                        className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg group transition-all duration-300"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(34,197,94,0.3)] pointer-events-none -mr-4 -ml-4 -mt-4 -mb-4 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <TreePine className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </motion.div>
                        <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-green-600 transition-colors leading-tight">Supressão em Vegetação Manual</h4>
                        <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Remoção manual especializada de vegetação em faixas de servidão</p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg group transition-all duration-300 relative"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(249,115,22,0.3)] pointer-events-none -mr-4 -ml-4 -mt-4 -mb-4 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Scissors className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </motion.div>
                        <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors leading-tight">Poda e Corte de Árvores</h4>
                        <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Poda e corte de árvores em linha de transmissão e redes de distribuição de energia elétrica</p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg group transition-all duration-300 relative"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(59,130,246,0.3)] pointer-events-none -mr-4 -ml-4 -mt-4 -mb-4 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </motion.div>
                        <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">Recuperação de Acesso em Vegetação</h4>
                        <p className="text-gray-600 text-xs md:text-sm group-hover:text-gray-700 transition-colors leading-relaxed">Recuperação de acesso em vegetação, aterramento e seccionamento de cercas</p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg group transition-all duration-300 relative"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(168,85,247,0.3)] pointer-events-none -mr-4 -ml-4 -mt-4 -mb-4 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Wrench className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </motion.div>
                        <h4 className="font-bold text-base md:text-lg mb-2 text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">Consertos de Porteiras</h4>
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
