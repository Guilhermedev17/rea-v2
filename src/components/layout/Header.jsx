"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, MessageCircle, Menu, X, Mail } from 'lucide-react';

// Variantes de animação
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

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight + 20 : 140;
            const elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
                top: Math.max(0, elementPosition),
                behavior: 'smooth'
            });

            // Close mobile menu if it's open
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        }
    };

    const navLinks = [
        { id: 'home', label: 'Início' },
        { id: 'services', label: 'Serviços' },
        { id: 'clients', label: 'Clientes' },
        { id: 'about', label: 'Sobre' },
        { id: 'contact', label: 'Contato' }
    ];

    return (
        <motion.header
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <motion.div
                className="bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >
                <div className="px-4 py-3 md:py-4">
                    <motion.div
                        className="flex items-center justify-between"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <div className="flex items-center">
                            <motion.div variants={scaleIn} className="transition-transform duration-300 hover:scale-[1.02]">
                                <Image
                                    src="/rea_logo_nova_transparente.png"
                                    alt="R&A Logo"
                                    width={220}
                                    height={60}
                                    className="h-10 md:h-12 lg:h-14 w-auto object-contain scale-110 md:scale-125 origin-left"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Navegação Desktop (Movida para o centro) */}
                        <motion.nav
                            className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2"
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                        >
                            {navLinks.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-600 hover:text-emerald-700 font-medium transition-colors duration-200 relative group text-sm"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            ))}
                        </motion.nav>

                        <motion.div
                            className="flex items-center space-x-3 md:space-x-4"
                            variants={fadeInUp}
                        >
                            <a
                                href="https://webmail.rea.srv.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden lg:flex items-center text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors"
                            >
                                <Mail className="w-4 h-4 mr-1.5" />
                                Webmail
                            </a>
                            <a
                                href="https://wa.me/27998746554"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 font-semibold text-sm"
                            >
                                <MessageCircle className="w-4 h-4 mr-1.5" />
                                WhatsApp
                            </a>

                            <button
                                onClick={toggleMobileMenu}
                                className="lg:hidden p-2 rounded-xl hover:bg-emerald-50 text-gray-600 transition-colors duration-200"
                                aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Dropdown - Navegação Mobile Direta */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden absolute top-full left-0 w-full mt-2 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <div className="p-4 flex flex-col space-y-2">
                            {navLinks.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-left py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="h-px bg-gray-100 my-2"></div>
                            <a
                                href="https://webmail.rea.srv.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center py-3 px-4 text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/50 rounded-xl font-medium transition-colors"
                            >
                                <Mail className="w-5 h-5 mr-3 text-emerald-600" />
                                Acessar Webmail
                            </a>
                            <a
                                href="https://wa.me/27998746554"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center py-3 px-4 mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium shadow-md"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Falar no WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
