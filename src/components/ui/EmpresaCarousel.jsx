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

    const [shuffledImages, setShuffledImages] = useState([]);

    const baseImages = [
        { src: "/imagem1.jpg", alt: "Equipe R&A em Treinamento de Segurança" },
        { src: "/imagem2.jpg", alt: "Profissional R&A com Veículo da Empresa" },
        { src: "/imagem3.jpg", alt: "Equipe R&A com Veículos e Equipamentos" },
        { src: "/imagem4.jpg", alt: "Frota de Veículos R&A" },
        { src: "/imagem5.jpeg", alt: "Equipe R&A em Treinamento de Altura" },
        { src: "/imagem6.jpeg", alt: "Equipe R&A em Campo 1" },
        { src: "/imagem7.jpeg", alt: "Equipe R&A em Campo 2" },
        { src: "/imagem8.jpeg", alt: "Equipe R&A Operacional" }
    ];

    // Embaralhar as imagens logo após a montagem do cliente (para não quebrar
    // a hidratação do SSR do Next.js entre o servidor e o React local)
    // e depois dar inicio ao preload e afins.
    useEffect(() => {
        const shuffled = [...baseImages].sort(() => Math.random() - 0.5);
        setShuffledImages(shuffled);

        const preloadImages = () => {
            shuffled.forEach((image, index) => {
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
        if (isPaused || shuffledImages.length === 0) return;
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % shuffledImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [shuffledImages.length, isPaused]);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % shuffledImages.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length);

    return (
        <div
            className="relative rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden bg-gray-900 group"
            style={{ transform: "translateZ(0)" }} /* Fix para bug de Webkit perder border-radius no scale */
        >
            {/* Loading Skeleton */}
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse z-10">
                    <div className="w-full aspect-video lg:aspect-[4/3] bg-gray-800 flex items-center justify-center">
                        <div className="text-gray-400 text-sm md:text-lg font-medium">Carregando fotos...</div>
                    </div>
                </div>
            )}

            {/* Container das imagens com Cross-Fade cinematográfico e Ken Burns lento */}
            <div className="relative w-full aspect-video lg:aspect-[4/3] overflow-hidden">
                {shuffledImages.map((image, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: index === 0 ? 1 : 0 }}
                        animate={{
                            opacity: currentImage === index ? 1 : 0,
                            zIndex: currentImage === index ? 10 : 0
                        }}
                        transition={{
                            opacity: { duration: 1.5, ease: "easeInOut" }
                        }}
                    >
                        <motion.div
                            className="absolute inset-0"
                            animate={{ scale: currentImage === index ? 1.05 : 1 }}
                            transition={{ duration: 6, ease: "easeOut" }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                style={{
                                    opacity: loadedImages.has(index) ? 1 : 0,
                                    transition: 'opacity 0.6s ease-in-out'
                                }}
                                priority={index === 0}
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none z-20"></div>
                    </motion.div>
                ))}
            </div>

            {/* Controles de Navegação Removidos a pedido do usuário: Agora é 100% automático */}
        </div>
    );
}
