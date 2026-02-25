"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

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

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="py-16 md:py-20 lg:py-24 bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="flex justify-center">
                            <div className="inline-flex items-center px-5 py-2.5 bg-white/40 backdrop-blur-md border border-gray-200/50 text-emerald-700 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-4">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                <span className="font-semibold text-sm tracking-wide">Ficou com alguma dúvida?</span>
                            </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                            Fale Conosco
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
                            Estamos prontos para atender suas necessidades em serviços elétricos especializados
                        </p>
                    </motion.div>
                </div>

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
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(16,185,129,0.2)] pointer-events-none -m-2 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-14 md:h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/20"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Phone className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                        </motion.div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">Telefone</h3>
                        <p className="text-sm md:text-base text-gray-600 mb-1">(27) 99874-6554</p>
                        <p className="text-sm md:text-base text-gray-600">(27) 99984-0445</p>
                    </motion.div>

                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative"
                        variants={scaleIn}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(14,165,233,0.2)] pointer-events-none -m-2 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-14 md:h-14 bg-sky-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-sky-500/20"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Mail className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
                        </motion.div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">E-mail</h3>
                        <p className="text-sm md:text-base text-gray-600">rea@rea.srv.br</p>
                    </motion.div>

                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative flex flex-col items-center"
                        variants={scaleIn}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(244,63,94,0.2)] pointer-events-none -m-2 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-14 md:h-14 bg-rose-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-rose-500/20"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-rose-600" />
                        </motion.div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">Matriz</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed tracking-wide text-center">
                            Alameda Buganville, 37<br />Centro, Sooretama/ES<br />CEP: 29927-000
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 text-center group transition-all duration-300 relative flex flex-col items-center"
                        variants={scaleIn}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_15px_30px_-10px_rgba(244,63,94,0.2)] pointer-events-none -m-2 z-[-1]"></div>
                        <motion.div
                            className="w-12 h-12 md:w-14 md:h-14 bg-rose-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-rose-500/20"
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-rose-600" />
                        </motion.div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">Apoio</h3>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed tracking-wide text-center">
                            Av. Cerejeira, 9 andar, Sala 916<br />Torre I, Movelar<br />Linhares-ES
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
