"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building, Award, Zap, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="py-16 md:py-20 lg:py-24 bg-white"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-12 md:space-y-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
                            {/* Coluna Texto (Esquerda no Desktop) */}
                            <div className="order-2 lg:order-1 text-center lg:text-left px-4 md:px-0">
                                <div className="inline-flex items-center px-5 py-2.5 bg-white/40 backdrop-blur-md border border-gray-200/50 text-emerald-700 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-6 md:mb-8">
                                    <Building className="w-4 h-4 mr-2" />
                                    <span className="font-semibold text-sm tracking-wide">Nossa Empresa</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
                                    R&A Serviços e Manutenções Elétricas
                                </h2>

                                <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                                    <p>
                                        A <strong className="text-gray-900">R&A SERVIÇOS E MANUTENÇÕES ELÉTRICAS</strong>, com sede em Sooretama/ES, é uma empresa especializada em prestação de serviços de intervenção em vegetação em linha de transmissão e redes de distribuição de MT/BT.
                                    </p>
                                    <p>
                                        A intervenção em vegetação é uma manutenção necessária, sem prejuízos ao meio ambiente, para que não haja risco de interrupção no fornecimento de energia quando ocorrem chuvas e ventos fortes.
                                    </p>
                                    <p>
                                        Temos por objetivo oferecer toda a qualidade que os nossos clientes precisam, contando com uma equipe profissional que se empenha para inovar e crescer, com cursos específicos em Segurança, Meio Ambiente e Saúde do Trabalho garantindo a satisfação de nossos clientes.
                                    </p>
                                </div>
                            </div>

                            {/* Coluna Imagem/Logo (Direita no Desktop) */}
                            <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative w-full h-48 md:h-64 lg:h-80 xl:h-96 transition-transform duration-500 hover:scale-[1.02] px-4 md:px-0">
                                {/* Fundo abstrato suave para a logo não "boiar" sozinha */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-blue-200/40 to-indigo-100/40 blur-3xl rounded-full mix-blend-multiply"></div>
                                <Image
                                    src="/rea_logo_oficial_transparente.png"
                                    alt="R&A Logo"
                                    fill
                                    className="object-contain drop-shadow-md relative z-10 scale-105"
                                    sizes="(max-width: 1024px) 80vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
                            <motion.div
                                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative flex flex-col items-center"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(79,70,229,0.2)] pointer-events-none -m-2 z-[-1]"></div>
                                <motion.div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-indigo-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 border border-indigo-500/20"
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Award className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                                </motion.div>
                                <h3 className="font-bold text-gray-900 mb-3 text-base md:text-lg tracking-tight group-hover:text-indigo-600 transition-colors">Missão</h3>
                                <p className="text-sm text-gray-600 leading-relaxed text-center">Prover excelência em nossos serviços, com agilidade, confiabilidade e inovação.</p>
                            </motion.div>

                            <motion.div
                                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative flex flex-col items-center"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(245,158,11,0.2)] pointer-events-none -m-2 z-[-1]"></div>
                                <motion.div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-amber-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 border border-amber-500/20"
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />
                                </motion.div>
                                <h3 className="font-bold text-gray-900 mb-3 text-base md:text-lg tracking-tight group-hover:text-amber-600 transition-colors">Visão</h3>
                                <p className="text-sm text-gray-600 leading-relaxed text-center">Ser uma empresa de referência, reconhecida pelos clientes e pela sociedade, pela qualidade de nossos serviços.</p>
                            </motion.div>

                            <motion.div
                                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative flex flex-col items-center"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.2)] pointer-events-none -m-2 z-[-1]"></div>
                                <motion.div
                                    className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 border border-emerald-500/20"
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />
                                </motion.div>
                                <h3 className="font-bold text-gray-900 mb-3 text-base md:text-lg tracking-tight group-hover:text-emerald-600 transition-colors">Valores</h3>
                                <p className="text-sm text-gray-600 leading-relaxed text-center">Ética, Respeito, Profissionalismo, Transparência, Espírito de equipe e Sustentabilidade.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
