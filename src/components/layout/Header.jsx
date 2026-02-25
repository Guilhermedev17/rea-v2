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
            className="sticky top-0 z-50 w-full"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {/* Barra Superior - Logo e Informações */}
            <motion.div
                className="bg-white/95 backdrop-blur-sm border-b border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >
                <div className="container mx-auto px-4 py-2 md:py-1">
                    <motion.div
                        className="flex items-center justify-between"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <div className="flex items-center space-x-3 md:space-x-6">
                            <motion.div variants={scaleIn} className="transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/rea_logo_nova_transparente.png"
                                    alt="R&A Logo"
                                    width={180}
                                    height={48}
                                    className="h-8 md:h-12 w-auto object-contain"
                                    priority
                                />
                            </motion.div>
                            <motion.div
                                className="hidden lg:flex items-center space-x-4 text-sm text-gray-600"
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Zap className="w-4 h-4 text-blue-600" />
                                    <span>Especialistas em Linhas de Transmissão</span>
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex items-center space-x-2 md:space-x-4"
                            variants={fadeInUp}
                        >
                            <a
                                href="https://wa.me/27998746554"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 font-semibold text-sm"
                            >
                                <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                                WhatsApp
                            </a>

                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                aria-label={isMobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-800" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-600" />
                                )}
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Barra Inferior - Navegação Desktop */}
            <motion.div
                className="hidden md:block bg-gradient-to-r from-green-600 to-green-700 text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
            >
                <div className="container mx-auto px-4">
                    <motion.nav
                        className="flex items-center space-x-6 lg:space-x-8 py-3"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {navLinks.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="hover:text-green-200 font-medium transition-opacity duration-200 relative group cursor-pointer text-sm md:text-base"
                                variants={fadeInUp}
                                whileHover={{ y: -2 }}
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full"></span>
                            </motion.button>
                        ))}
                        <motion.a
                            href="https://webmail.rea.srv.br/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-200 font-medium transition-opacity duration-200 relative group text-sm md:text-base"
                            variants={fadeInUp}
                            whileHover={{ y: -2 }}
                        >
                            Webmail
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-200 transition-opacity duration-200 group-hover:w-full"></span>
                        </motion.a>
                        <motion.div
                            className="ml-auto hidden lg:block"
                            variants={fadeInUp}
                        >
                            <span className="text-green-200 text-sm">Sooretama/ES</span>
                        </motion.div>
                    </motion.nav>
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
                        className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-lg"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
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
                                className="flex items-center py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
                            >
                                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                                Acessar Webmail
                            </a>
                            <a
                                href="https://wa.me/27998746554"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center py-3 px-4 mt-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium"
                            >
                                <MessageCircle className="w-5 h-5 mr-3" />
                                Falar no WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
