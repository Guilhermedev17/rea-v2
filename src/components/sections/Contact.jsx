"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

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

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div variants={scaleIn} className="flex justify-center">
                        <div className="relative group cursor-default mb-4">
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                            <div className="relative inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                <span className="font-semibold tracking-wide">Entre em Contato</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4"
                        variants={fadeInUp}
                    >
                        Fale Conosco
                    </motion.h2>
                    <motion.p
                        className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0"
                        variants={fadeInUp}
                    >
                        Estamos prontos para atender suas necessidades em serviços elétricos especializados
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative"
                        variants={scaleIn}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(34,197,94,0.15)] pointer-events-none -m-2 z-[-1]"></div>
                        <motion.div
                            className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Telefone</h3>
                        <p className="text-sm md:text-base text-gray-600">(27) 99874-6554</p>
                        <p className="text-sm md:text-base text-gray-600">(27) 99984-0445</p>
                    </motion.div>

                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative"
                        variants={scaleIn}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(59,130,246,0.15)] pointer-events-none -m-2 z-[-1]"></div>
                        <motion.div
                            className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">E-mail</h3>
                        <p className="text-sm md:text-base text-gray-600">rea@rea.srv.br</p>
                    </motion.div>

                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative"
                        variants={scaleIn}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(249,115,22,0.15)] pointer-events-none -m-2 z-[-1]"></div>
                        <motion.div
                            className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Endereço</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Alameda Buganville, 37<br />Centro, Sooretama/ES<br />CEP: 29927-000</p>
                    </motion.div>

                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative"
                        variants={scaleIn}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(249,115,22,0.15)] pointer-events-none -m-2 z-[-1]"></div>
                        <motion.div
                            className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Endereço de Apoio</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Av. Cerejeira, 9 andar, Sala 916<br />Torre I, Movelar<br />Linhares-ES, CEP 29906-014</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
