"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900 text-gray-300 py-6 md:py-10 border-t border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
                    {/* Linha 1: Marca e Descrição */}
                    <div className="space-y-3 md:space-y-4 text-center md:text-left">
                        <h4 className="font-bold text-xl md:text-xl text-white tracking-wide">R&A Serviços</h4>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
                            Especializada em serviços elétricos com foco na segurança, qualidade e preservação ambiental.
                        </p>
                    </div>

                    {/* Linha 2: Serviços */}
                    <div className="text-center md:text-left bg-gray-800/20 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                        <h4 className="font-bold text-base md:text-lg mb-4 md:mb-4 text-white tracking-wide">Serviços</h4>
                        <ul className="space-y-3 md:space-y-2 text-sm text-gray-400">
                            <li className="hover:text-emerald-400 transition-colors cursor-pointer py-1 md:py-0">Supressão em Vegetação</li>
                            <li className="hover:text-emerald-400 transition-colors cursor-pointer py-1 md:py-0">Poda e Corte de Árvores</li>
                            <li className="hover:text-emerald-400 transition-colors cursor-pointer py-1 md:py-0">Recuperação de Acesso</li>
                            <li className="hover:text-emerald-400 transition-colors cursor-pointer py-1 md:py-0">Consertos de Porteiras</li>
                        </ul>
                    </div>

                    {/* Linha 3: Empresa */}
                    <div className="text-center md:text-left border-b md:border-b-0 border-gray-800 pb-8 md:pb-0">
                        <h4 className="font-bold text-base md:text-lg mb-4 md:mb-4 text-white tracking-wide">Empresa</h4>
                        <ul className="space-y-3 md:space-y-2 text-sm text-gray-400 flex flex-col items-center md:items-start">
                            <li className="flex items-center hover:text-emerald-400 transition-colors">
                                <a href="/galeria" className="flex items-center w-full">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span> Nossa Galeria
                                </a>
                            </li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span> 10+ Anos de Experiência</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span> Amiga da Natureza</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Linhas de Transmissão</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span> Redes MT/BT</li>
                        </ul>
                    </div>

                    {/* Linha 4: Contato */}
                    <div className="sm:col-span-2 lg:col-span-2 text-center md:text-left mt-2 md:mt-0">
                        <h4 className="font-bold text-base md:text-lg mb-6 md:mb-4 text-white tracking-wide">Contato e Endereços</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-6">
                            {/* Coluna Esquerda Contato */}
                            <div className="space-y-4 text-sm text-gray-400 bg-gray-800/10 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                                <div className="flex flex-col md:flex-row items-center group gap-2 md:gap-0">
                                    <div className="p-2.5 md:p-2 bg-gray-800/50 rounded-lg group-hover:bg-emerald-900/30 transition-colors md:mr-3 inline-block">
                                        <Phone className="w-5 h-5 md:w-4 md:h-4 text-emerald-500" />
                                    </div>
                                    <span className="group-hover:text-emerald-400 transition-colors text-base md:text-sm font-medium m:font-normal text-emerald-100 md:text-gray-400">(27) 99874-6554</span>
                                </div>
                                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                                    <MapPin className="w-5 h-5 md:w-4 md:h-4 md:mr-3 mb-2 md:mb-0 md:mt-1 flex-shrink-0 text-gray-500" />
                                    <span className="leading-relaxed opacity-80 max-w-[200px]">
                                        Alameda Buganville, 37<br />
                                        Centro, Sooretama/ES<br />
                                        CEP: 29927-000
                                    </span>
                                </div>
                            </div>

                            {/* Coluna Direita Contato */}
                            <div className="space-y-4 text-sm text-gray-400 bg-gray-800/10 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                                <div className="flex flex-col md:flex-row items-center group gap-2 md:gap-0">
                                    <div className="p-2.5 md:p-2 bg-gray-800/50 rounded-lg group-hover:bg-emerald-900/30 transition-colors md:mr-3 inline-block">
                                        <Mail className="w-5 h-5 md:w-4 md:h-4 text-emerald-500" />
                                    </div>
                                    <span className="group-hover:text-emerald-400 transition-colors text-base md:text-sm font-medium m:font-normal text-emerald-100 md:text-gray-400">rea@rea.srv.br</span>
                                </div>
                                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                                    <MapPin className="w-5 h-5 md:w-4 md:h-4 md:mr-3 mb-2 md:mb-0 md:mt-1 flex-shrink-0 text-gray-500" />
                                    <span className="leading-relaxed opacity-80 max-w-[200px]">
                                        Av. Cerejeira, Torre I<br />
                                        Movelar, Linhares/ES<br />
                                        CEP: 29906-014
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-10 md:mt-8 pt-8 md:pt-6 flex items-center justify-center md:justify-start text-center md:text-left text-sm text-gray-500 pb-4 md:pb-0">
                    <p>© {new Date().getFullYear()} R&A Serviços e Manutenções Elétricas.<br className="md:hidden" /> Todos os direitos reservados.</p>
                </div>
            </div>
        </motion.footer>
    );
}
