"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, PlayCircle } from 'lucide-react';

// Mock data: futuramente você pode substituir isso por imagens/vídeos reais importadas do seu banco
const galleryItems = [
    { id: 2, type: 'image', src: '/imagem1.jpg', category: 'redes', alt: 'Manutenção de Rede', title: 'Intervenção em Rede de Distribuição' },
    { id: 3, type: 'image', src: '/imagem2.jpg', category: 'manutencao', alt: 'Trabalho preventivo', title: 'Poda Preventiva em Área Urbana' },
    { id: 4, type: 'image', src: '/imagem3.jpg', category: 'supressao', alt: 'Corte de árvores', title: 'Corte de Árvores de Risco' },
    { id: 5, type: 'image', src: '/imagem4.jpg', category: 'redes', alt: 'Equipe em campo', title: 'Manutenção em Alta Tensão' },
    { id: 6, type: 'image', src: '/imagem5.jpeg', category: 'manutencao', alt: 'Inspeção', title: 'Inspeção de Rotina em Torres' },
    { id: 7, type: 'image', src: '/imagem6.jpeg', category: 'supressao', alt: 'Limpeza mecanizada', title: 'Roçada Mecanizada' },
    { id: 8, type: 'image', src: '/imagem7.jpeg', category: 'redes', alt: 'Linhas prontas', title: 'Rede Elétrica Liberada' },
    { id: 12, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.35.14.jpeg', category: 'geral', alt: 'Trabalho R&A 1', title: 'Serviços R&A' },
    { id: 13, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.35.15 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 2', title: 'Serviços R&A' },
    { id: 14, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.35.15 (2).jpeg', category: 'geral', alt: 'Trabalho R&A 3', title: 'Serviços R&A' },
    { id: 15, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.35.16 (3).jpeg', category: 'geral', alt: 'Trabalho R&A 4', title: 'Serviços R&A' },
    { id: 16, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.35.17 (2).jpeg', category: 'geral', alt: 'Trabalho R&A 5', title: 'Serviços R&A' },
    { id: 17, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.40.15 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 6', title: 'Serviços R&A' },
    { id: 18, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.40.15.jpeg', category: 'geral', alt: 'Trabalho R&A 7', title: 'Serviços R&A' },
    { id: 19, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.40.16 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 8', title: 'Serviços R&A' },
    { id: 20, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.40.16 (2).jpeg', category: 'geral', alt: 'Trabalho R&A 9', title: 'Serviços R&A' },
    { id: 21, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.40.16.jpeg', category: 'geral', alt: 'Trabalho R&A 10', title: 'Serviços R&A' },
    { id: 22, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.40.17 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 11', title: 'Serviços R&A' },
    { id: 23, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.41.15 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 12', title: 'Serviços R&A' },
    { id: 24, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.51.49.jpeg', category: 'geral', alt: 'Trabalho R&A 13', title: 'Serviços R&A' },
    { id: 25, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.51.50 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 14', title: 'Serviços R&A' },
    { id: 26, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.51.50 (2).jpeg', category: 'geral', alt: 'Trabalho R&A 15', title: 'Serviços R&A' },
    { id: 27, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 18.51.50 (3).jpeg', category: 'geral', alt: 'Trabalho R&A 16', title: 'Serviços R&A' },
    { id: 28, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.13 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 17', title: 'Serviços R&A' },
    { id: 29, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.13.jpeg', category: 'geral', alt: 'Trabalho R&A 18', title: 'Serviços R&A' },
    { id: 30, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.14 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 19', title: 'Serviços R&A' },
    { id: 31, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.15 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 20', title: 'Serviços R&A' },
    { id: 32, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.15 (2).jpeg', category: 'geral', alt: 'Trabalho R&A 21', title: 'Serviços R&A' },
    { id: 33, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.15.jpeg', category: 'geral', alt: 'Trabalho R&A 22', title: 'Serviços R&A' },
    { id: 34, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.16.jpeg', category: 'geral', alt: 'Trabalho R&A 23', title: 'Serviços R&A' },
    { id: 35, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.18.jpeg', category: 'geral', alt: 'Trabalho R&A 24', title: 'Serviços R&A' },
    { id: 36, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.19 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 25', title: 'Serviços R&A' },
    { id: 37, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.20 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 26', title: 'Serviços R&A' },
    { id: 38, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.20.jpeg', category: 'geral', alt: 'Trabalho R&A 27', title: 'Serviços R&A' },
    { id: 39, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.21 (3).jpeg', category: 'geral', alt: 'Trabalho R&A 28', title: 'Serviços R&A' },
    { id: 40, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.22 (3).jpeg', category: 'geral', alt: 'Trabalho R&A 29', title: 'Serviços R&A' },
    { id: 41, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.22 (4).jpeg', category: 'geral', alt: 'Trabalho R&A 30', title: 'Serviços R&A' },
    { id: 42, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.23 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 31', title: 'Serviços R&A' },
    { id: 43, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.23 (3).jpeg', category: 'geral', alt: 'Trabalho R&A 32', title: 'Serviços R&A' },
    { id: 44, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.23.jpeg', category: 'geral', alt: 'Trabalho R&A 33', title: 'Serviços R&A' },
    { id: 45, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.09.24.jpeg', category: 'geral', alt: 'Trabalho R&A 34', title: 'Serviços R&A' },
    { id: 46, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.15.12.jpeg', category: 'geral', alt: 'Trabalho R&A 35', title: 'Serviços R&A' },
    { id: 47, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.15.13 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 36', title: 'Serviços R&A' },
    { id: 48, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 19.15.13.jpeg', category: 'geral', alt: 'Trabalho R&A 37', title: 'Serviços R&A' },
    { id: 49, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.26 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 38', title: 'Serviços R&A' },
    { id: 50, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.26 (2).jpeg', category: 'geral', alt: 'Trabalho R&A 39', title: 'Serviços R&A' },
    { id: 51, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.26 (3).jpeg', category: 'geral', alt: 'Trabalho R&A 40', title: 'Serviços R&A' },
    { id: 52, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.26 (4).jpeg', category: 'geral', alt: 'Trabalho R&A 41', title: 'Serviços R&A' },
    { id: 53, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.26.jpeg', category: 'geral', alt: 'Trabalho R&A 42', title: 'Serviços R&A' },
    { id: 54, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.27 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 43', title: 'Serviços R&A' },
    { id: 55, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.27 (2).jpeg', category: 'geral', alt: 'Trabalho R&A 44', title: 'Serviços R&A' },
    { id: 56, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.27 (3).jpeg', category: 'geral', alt: 'Trabalho R&A 45', title: 'Serviços R&A' },
    { id: 57, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.28 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 46', title: 'Serviços R&A' },
    { id: 58, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.28 (2).jpeg', category: 'geral', alt: 'Trabalho R&A 47', title: 'Serviços R&A' },
    { id: 59, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.28 (3).jpeg', category: 'geral', alt: 'Trabalho R&A 48', title: 'Serviços R&A' },
    { id: 60, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.28 (4).jpeg', category: 'geral', alt: 'Trabalho R&A 49', title: 'Serviços R&A' },
    { id: 61, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.28.jpeg', category: 'geral', alt: 'Trabalho R&A 50', title: 'Serviços R&A' },
    { id: 62, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.29 (1).jpeg', category: 'geral', alt: 'Trabalho R&A 51', title: 'Serviços R&A' },
    { id: 63, type: 'image', src: '/fotos_galeria/WhatsApp Image 2026-02-25 at 20.51.29.jpeg', category: 'geral', alt: 'Trabalho R&A 52', title: 'Serviços R&A' },
    { id: 9, type: 'video', src: '/videos/01.mp4', thumb: '/rea_logo_oficial_transparente.png', category: 'redes', alt: 'Trabalho de Linha Viva 1', title: 'Manutenção MT' },
    { id: 10, type: 'video', src: '/videos/02.mp4', thumb: '/rea_logo_oficial_transparente.png', category: 'manutencao', alt: 'Trabalho de Linha Viva 2', title: 'Equipe em Atividade' },
    { id: 11, type: 'video', src: '/videos/intitucional.mp4', thumb: '/rea_logo_oficial_transparente.png', category: 'supressao', alt: 'Vídeo Institucional R&A', title: 'Institucional R&A' },
    { id: 64, type: 'video', src: '/videos/04.mp4', thumb: '/rea_logo_oficial_transparente.png', category: 'geral', alt: 'Vídeo de Serviço 4', title: 'Serviço em Campo' }
];

export default function Gallery() {
    const ITEMS_PER_PAGE = 6;
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const [activeTab, setActiveTab] = useState('image'); // 'image' ou 'video'

    // Portal Fix (garante que só tenta renderizar no body após o hydration no client-side)
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Travar scroll do body quando o modal estiver aberto
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup: Garante que o scroll volta ao normal ao desmontar componente ou fechar forçado
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const filteredItems = galleryItems.filter(item => item.type === activeTab);
    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const visibleItems = filteredItems.slice(startIndex, endIndex);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    return (
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Selection Tabs */}
            <div className="flex justify-center gap-4 mb-12">
                <button
                    onClick={() => handleTabChange('image')}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'image'
                        ? 'bg-emerald-600 text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                        }`}
                >
                    Fotos
                </button>
                <button
                    onClick={() => handleTabChange('video')}
                    className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'video'
                        ? 'bg-emerald-600 text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
                        }`}
                >
                    Vídeos
                </button>
            </div>

            {/* Photo/Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visibleItems.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl ${item.type === 'video' ? 'bg-white border border-gray-100' : 'bg-gray-100'}`}
                        onClick={() => setSelectedImage(item)}
                    >
                        <Image
                            src={item.type === 'video' ? item.thumb : item.src}
                            alt={item.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={`transition-transform duration-700 group-hover:scale-110 ${item.type === 'video' ? 'object-contain p-8' : 'object-cover'}`}
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            {item.type === 'video' ? (
                                <PlayCircle className="text-white opacity-80 group-hover:opacity-100 w-16 h-16 transition-opacity duration-300 drop-shadow-lg" />
                            ) : (
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 w-10 h-10 transition-opacity duration-300 drop-shadow-lg" />
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

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

                            {selectedImage.type === 'video' ? (
                                <video
                                    src={selectedImage.src}
                                    controls
                                    autoPlay
                                    className="m-auto block w-[95vw] md:w-[1200px] max-w-full h-auto aspect-video max-h-[80vh] md:max-h-[85vh] border-4 md:border-[6px] border-white shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-sm bg-black"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            ) : (
                                <motion.img
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="m-auto block w-auto h-auto max-w-[90vw] max-h-[70vh] md:max-w-4xl md:max-h-[75vh] border-4 md:border-[6px] border-white shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-sm"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}
