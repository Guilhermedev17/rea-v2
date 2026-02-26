"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Mock data: futuramente você pode substituir isso por imagens reais importadas do seu banco ou pasta public
const galleryItems = [
    { id: 1, src: '/vegetation_management_high_quality.jpg', category: 'supressao', alt: 'Trabalho de Supressão em Linha de Transmissão', title: 'Limpeza de Faixa de Servidão' },
    { id: 2, src: '/imagem1.jpg', category: 'redes', alt: 'Manutenção de Rede', title: 'Intervenção em Rede de Distribuição' },
    { id: 3, src: '/imagem2.jpg', category: 'manutencao', alt: 'Trabalho preventivo', title: 'Poda Preventiva em Área Urbana' },
    { id: 4, src: '/imagem3.jpg', category: 'supressao', alt: 'Corte de árvores', title: 'Corte de Árvores de Risco' },
    { id: 5, src: '/imagem4.jpg', category: 'redes', alt: 'Equipe em campo', title: 'Manutenção em Alta Tensão' },
    { id: 6, src: '/imagem5.jpeg', category: 'manutencao', alt: 'Inspeção', title: 'Inspeção de Rotina em Torres' },
    { id: 7, src: '/imagem6.jpeg', category: 'supressao', alt: 'Limpeza mecanizada', title: 'Roçada Mecanizada' },
    { id: 8, src: '/imagem7.jpeg', category: 'redes', alt: 'Linhas prontas', title: 'Rede Elétrica Liberada' },
];

export default function Gallery() {
    const ITEMS_PER_PAGE = 6;
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Portal Fix (garante que só tenta renderizar no body após o hydration no client-side)
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const visibleItems = galleryItems.slice(startIndex, endIndex);

    return (
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Photo Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
                <AnimatePresence>
                    {visibleItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={item.id}
                            className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl bg-gray-100"
                            onClick={() => setSelectedImage(item)}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 w-10 h-10 transition-opacity duration-300 drop-shadow-lg" />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center space-x-4">
                    <button
                        onClick={() => {
                            setCurrentPage(prev => Math.max(prev - 1, 1));
                            window.scrollTo({ top: 300, behavior: 'smooth' }); // Rola levemente pra cima ao trocar de página
                        }}
                        disabled={currentPage === 1}
                        className={`px-6 py-2.5 rounded-full font-medium transition-colors border ${currentPage === 1
                            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                            : 'bg-white text-emerald-700 border-emerald-600 hover:bg-emerald-50 shadow-sm'
                            }`}
                    >
                        Anterior
                    </button>

                    <span className="text-gray-600 font-medium">
                        Página {currentPage} de {totalPages}
                    </span>

                    <button
                        onClick={() => {
                            setCurrentPage(prev => Math.min(prev + 1, totalPages));
                            window.scrollTo({ top: 300, behavior: 'smooth' }); // Rola levemente pra cima ao trocar de página
                        }}
                        disabled={currentPage === totalPages}
                        className={`px-6 py-2.5 rounded-full font-medium transition-colors border ${currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                            : 'bg-white text-emerald-700 border-emerald-600 hover:bg-emerald-50 shadow-sm'
                            }`}
                    >
                        Próxima
                    </button>
                </div>
            )}

            {/* Lightbox Modal com Portal */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 w-screen h-[100dvh] z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm overflow-hidden p-4 md:p-8"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white p-2 z-50 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                }}
                            >
                                <X className="w-10 h-10 md:w-12 md:h-12" />
                            </button>

                            <motion.img
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="m-auto block w-auto h-auto max-w-full max-h-[80vh] md:max-w-[95vw] md:max-h-[90vh] border-4 md:border-[6px] border-white shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-sm"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
