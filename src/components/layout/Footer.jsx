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
            className="bg-gradient-to-r from-green-700 to-blue-700 text-white py-8 md:py-10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Linha 1: Marca e Descrição */}
                    <div className="space-y-3">
                        <div className="relative h-10 md:h-12 w-40 md:w-48">
                            <Image
                                src="/rea_logo_nova_transparente.png"
                                alt="R&A Logo"
                                fill
                                className="object-contain object-left border-none"
                                sizes="(max-width: 768px) 160px, 192px"
                            />
                        </div>
                        <p className="text-green-50 text-sm leading-relaxed">
                            Especializada em serviços elétricos com foco na segurança, qualidade e preservação ambiental.
                        </p>
                    </div>

                    {/* Linha 2: Serviços */}
                    <div>
                        <h4 className="font-bold text-base md:text-lg mb-3 text-white">Serviços</h4>
                        <ul className="space-y-2 text-sm text-green-50">
                            <li>Supressão em Vegetação Manual</li>
                            <li>Poda e Corte de Árvores</li>
                            <li>Recuperação de Acesso em Vegetação</li>
                            <li>Consertos de Porteiras</li>
                        </ul>
                    </div>

                    {/* Linha 3: Empresa */}
                    <div>
                        <h4 className="font-bold text-base md:text-lg mb-3 text-white">Empresa</h4>
                        <ul className="space-y-2 text-sm text-green-50">
                            <li>10+ Anos de Experiência</li>
                            <li>Empresa Amiga da Natureza</li>
                            <li>Linhas de Transmissão</li>
                            <li>Redes de Distribuição MT/BT</li>
                        </ul>
                    </div>

                    {/* Linha 4: Contactos */}
                    <div>
                        <h4 className="font-bold text-base md:text-lg mb-3 text-white">Contato</h4>
                        <div className="space-y-3 text-sm text-green-50">
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                                <span>(27) 99874-6554</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                                <span>(27) 99984-0445</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                                <span>rea@rea.srv.br</span>
                            </div>
                            <div className="flex items-start pt-1">
                                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                                <span className="leading-relaxed">
                                    Alameda Buganville, 37<br />
                                    Centro, Sooretama/ES<br />
                                    CEP: 29927-000
                                </span>
                            </div>
                            <div className="flex items-start pt-1">
                                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                                <span className="leading-relaxed">
                                    Av. Cerejeira, 9 andar, Sala 916<br />
                                    Torre I, Movelar, Linhares-ES<br />
                                    CEP: 29906-014
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright e Fundo */}
                <div className="border-t border-green-600/50 mt-8 pt-6 text-center text-sm text-green-50">
                    <p>© {new Date().getFullYear()} R&A Serviços e Manutenções Elétricas. Todos os direitos reservados.</p>
                </div>
            </div>
        </motion.footer>
    );
}
