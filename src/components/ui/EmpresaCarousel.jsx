"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function EmpresaCarousel() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [loadedImages, setLoadedImages] = useState(new Set());
    const [isMobile, setIsMobile] = useState(false);

    const images = [
        { src: "/imagem1.jpg", alt: "Equipe R&A em Treinamento de Segurança" },
        { src: "/imagem2.jpg", alt: "Profissional R&A com Veículo da Empresa" },
        { src: "/imagem3.jpg", alt: "Equipe R&A com Veículos e Equipamentos" },
        { src: "/imagem4.jpg", alt: "Frota de Veículos R&A" },
        { src: "/imagem5.jpeg", alt: "Equipe R&A em Treinamento de Altura" }
    ];

    // Preload das imagens
    useEffect(() => {
        const preloadImages = () => {
            images.forEach((image, index) => {
                const img = new window.Image();
                img.onload = () => {
                    setLoadedImages(prev => new Set([...prev, index]));
                    if (index === 0) setIsLoading(false);
                };
                img.src = image.src;
            });
        };
        preloadImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Timer do carousel com pause
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length, isPaused]);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div
            className="relative rounded-2xl shadow-2xl overflow-hidden bg-gray-200"
            onMouseEnter={() => !isMobile && setIsPaused(true)}
            onMouseLeave={() => !isMobile && setIsPaused(false)}
        >
            {/* Loading Skeleton */}
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse z-10">
                    <div className="w-full h-64 md:h-96 bg-gray-300 flex items-center justify-center">
                        <div className="text-gray-500 text-sm md:text-lg font-medium">Carregando fotos...</div>
                    </div>
                </div>
            )}

            {/* Container das imagens com slide */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden">
                <motion.div
                    className="flex w-full h-full"
                    animate={{ x: `-${currentImage * 100}%` }}
                    transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="min-w-full h-full relative"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                style={{
                                    opacity: loadedImages.has(index) ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out'
                                }}
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Setas de navegação */}
            <button
                onClick={prevImage}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-1.5 md:p-2 transition-all duration-200 flex items-center justify-center z-10"
                style={{ opacity: isMobile ? 0.8 : (isPaused ? 1 : 0) }}
                aria-label="Imagem anterior"
            >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </button>

            <button
                onClick={nextImage}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-1.5 md:p-2 transition-all duration-200 flex items-center justify-center z-10"
                style={{ opacity: isMobile ? 0.8 : (isPaused ? 1 : 0) }}
                aria-label="Próxima imagem"
            >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 md:space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        aria-label={`Ir para imagem ${index + 1}`}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentImage
                                ? 'bg-white shadow-lg scale-110'
                                : 'bg-white/60 hover:bg-white/80 hover:scale-105'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
