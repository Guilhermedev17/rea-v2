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
                    <div className="space-y-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 mb-6">
                                <Building className="w-4 h-4 mr-2" />
                                <span className="font-semibold">Nossa Empresa</span>
                            </div>

                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                                R&A Serviços e Manutenções Elétricas
                            </h2>

                            <div className="flex justify-center mb-6 md:mb-8 relative w-32 md:w-40 lg:w-48 h-16 md:h-24 mx-auto hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/rea_logo_transparent_clean.png"
                                    alt="R&A Logo"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 128px, 192px"
                                />
                            </div>

                            <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-left px-4 md:px-0">
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

                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
                            <Card className="text-center p-4 md:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                                    <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Missão</h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Prover excelência em nossos serviços, com agilidade, confiabilidade e inovação.</p>
                            </Card>

                            <Card className="text-center p-4 md:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Visão</h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Ser uma empresa de referência, reconhecida pelos clientes, colaboradores, comunidade e fornecedores, pela qualidade de nossos serviços.</p>
                            </Card>

                            <Card className="text-center p-4 md:p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Valores</h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Ética, Respeito, Profissionalismo, Transparência, Espírito de equipe, Humildade, Responsabilidade e Sustentabilidade.</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
