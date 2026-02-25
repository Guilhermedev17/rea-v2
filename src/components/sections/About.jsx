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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-12 md:space-y-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
                            {/* Coluna Texto (Esquerda no Desktop) */}
                            <div className="order-2 lg:order-1 text-center lg:text-left px-4 md:px-0">
                                <div className="inline-flex items-center bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full mb-6 md:mb-8 shadow-sm">
                                    <Building className="w-4 h-4 mr-2" />
                                    <span className="font-semibold tracking-wide text-xs uppercase">Nossa Empresa</span>
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
                                    src="/rea_logo_transparent_clean.png"
                                    alt="R&A Logo"
                                    fill
                                    className="object-contain drop-shadow-md relative z-10"
                                    sizes="(max-width: 1024px) 80vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
                            <Card className="text-center p-6 md:p-8 bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-3 text-base md:text-lg tracking-tight">Missão</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Prover excelência em nossos serviços, com agilidade, confiabilidade e inovação.</p>
                            </Card>

                            <Card className="text-center p-6 md:p-8 bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-3 text-base md:text-lg tracking-tight">Visão</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Ser uma empresa de referência, reconhecida pelos clientes e pela sociedade, pela qualidade de nossos serviços.</p>
                            </Card>

                            <Card className="text-center p-6 md:p-8 bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-3 text-base md:text-lg tracking-tight">Valores</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Ética, Respeito, Profissionalismo, Transparência, Espírito de equipe e Sustentabilidade.</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
