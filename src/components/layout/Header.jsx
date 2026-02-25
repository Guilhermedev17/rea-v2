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
            // Como as seções já têm padding (py-16 a py-24), a rolagem deve casar
            // exatamente o fundo do menu com o topo da seção (sem margens extras).
            const headerHeight = header ? header.offsetHeight : 100;
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
            className="fixed top-0 left-0 w-full z-50"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <motion.div
                className="bg-white/85 backdrop-blur-md border-b border-gray-100/50 shadow-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-2 md:py-3">
                    <motion.div
                        className="flex items-center justify-between"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <div className="flex items-center relative w-[160px] md:w-[220px] h-10 md:h-12">
                            <motion.div variants={scaleIn} className="absolute top-1/2 -translate-y-1/2 left-0 transition-transform duration-300 hover:scale-[1.02]">
                                <Image
                                    src="/rea_logo_oficial_transparente.png"
                                    alt="R&A Logo"
                                    width={400}
                                    height={150}
                                    quality={100}
                                    className="h-16 md:h-20 w-auto object-contain object-left drop-shadow-md"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Navegação Desktop */}
                        <motion.nav
                            className="hidden lg:flex items-center space-x-8"
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
                                href="https://wa.me/27998746554"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden lg:flex items-center px-4 py-2 bg-emerald-50/50 text-emerald-700 hover:bg-emerald-100/60 border border-emerald-200/30 rounded-full transition-all duration-300 font-medium text-sm"
                            >
                                <MessageCircle className="w-4 h-4 mr-1.5" />
                                WhatsApp
                            </a>
                            <a
                                href="https://webmail.rea.srv.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex items-center px-5 py-2.5 bg-orange-50 text-orange-600 border border-orange-200/60 rounded-full shadow-[0_4px_14px_0_rgba(255,237,213,0.39)] hover:shadow-[0_6px_20px_rgba(255,237,213,0.23)] hover:bg-orange-100/50 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 font-semibold text-sm"
                            >
                                <Mail className="w-4 h-4 mr-1.5" />
                                Webmail
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
                                href="https://wa.me/27998746554"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center py-3 px-4 bg-emerald-50/50 text-emerald-700 hover:bg-emerald-100/60 border border-emerald-200/30 rounded-xl font-medium shadow-sm transition-colors"
                            >
                                <MessageCircle className="w-5 h-5 mr-3 text-emerald-600" />
                                Falar no WhatsApp
                            </a>
                            <a
                                href="https://webmail.rea.srv.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center py-3 px-4 mt-4 bg-orange-50 text-orange-600 border border-orange-200/60 hover:bg-orange-100/50 rounded-xl font-semibold shadow-sm transition-colors"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                Acessar Webmail
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
