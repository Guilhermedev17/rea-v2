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
            className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="container mx-auto px-4">
                {/* Hero Image Section */}
                <motion.div
                    className="relative mb-12 md:mb-16"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <motion.div
                        className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl h-48 md:h-64 cursor-default"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Image
                            src="/vegetation_management_high_quality.jpg"
                            alt="Supressão em vegetação manual"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/60 pointer-events-none"></div>
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="text-center text-white">
                                <motion.div
                                    className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
                                    variants={scaleIn}
                                >
                                    <Scissors className="w-12 h-12 text-white" />
                                </motion.div>
                                <motion.h3
                                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 tracking-wide text-shadow-md"
                                    variants={fadeInUp}
                                >
                                    Serviços Especializados
                                </motion.h3>
                                <motion.p
                                    className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl leading-relaxed px-4 md:px-0 mx-auto text-shadow-sm"
                                    variants={fadeInUp}
                                >
                                    Soluções sustentáveis e especializadas para o setor elétrico, sempre priorizando o equilíbrio ambiental
                                </motion.p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 group"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
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
                        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 group"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
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
                        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 group"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
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
                        className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 group"
                        variants={scaleIn}
                        whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
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
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-16 md:-translate-y-32 translate-x-16 md:translate-x-32 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-white/10 rounded-full translate-y-12 md:translate-y-24 -translate-x-12 md:-translate-x-24 pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 md:mr-4">
                                    <Leaf className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Compromisso Ambiental</h3>
                            </div>
                            <p className="text-base md:text-lg lg:text-xl opacity-90 leading-relaxed max-w-4xl">
                                Todos os nossos serviços são realizados com foco na preservação ambiental, garantindo o equilíbrio perfeito entre a manutenção da infraestrutura elétrica e a proteção do meio ambiente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
