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
        { src: "/imagem1.webp", alt: "Equipe R&A em Treinamento de Segurança" },
        { src: "/imagem2.webp", alt: "Profissional R&A com Veículo da Empresa" },
        { src: "/imagem3.webp", alt: "Equipe R&A com Veículos e Equipamentos" },
        { src: "/imagem4.webp", alt: "Frota de Veículos R&A" },
        { src: "/imagem5.webp", alt: "Equipe R&A em Treinamento de Altura" },
        { src: "/imagem6.webp", alt: "Equipe R&A em Campo 1" },
        { src: "/imagem7.webp", alt: "Equipe R&A em Campo 2" },
        { src: "/imagem8.webp", alt: "Equipe R&A Operacional" }
    ];

    // Embaralhar as imagens logo após a montagem do cliente (para não quebrar
    // a hidratação do SSR do Next.js entre o servidor e o React local)
    // e depois dar inicio ao preload e afins.
    useEffect(() => {
        const shuffled = [...baseImages].sort(() => Math.random() - 0.5);
        setShuffledImages(shuffled);
        // Removemos o preload manual com new window.Image() pois ele pode falhar 
        // em rotas estáticas ou caminhos relativos dependendo do servidor.
        // A responsabilidade de avisar que carregou vai passar para a tag <Image /> nativa lá embaixo.
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
            {/* O esqueleto de carregamento foi removido pois as imagens WebP carregam quase instantaneamente */}

            {/* Container das imagens com Cross-Fade cinematográfico e Ken Burns lento */}
            <div className="relative w-full aspect-video lg:aspect-[4/3] overflow-hidden">
                {shuffledImages.map((image, index) => {
                    // Otimização: No mobile, não precisamos renderizar todas as 8 imagens de uma vez pro DOM.
                    // Carregamos a atual, a próxima, e a anterior. Para as outras, deixamos em null se a performance for crítica
                    // Porém como o framer-motion lida com a div pai, vamos pelo menos otimizar as props da <Image>
                    const isVisibleOrAdjacent =
                        index === currentImage ||
                        index === (currentImage + 1) % shuffledImages.length ||
                        index === (currentImage - 1 + shuffledImages.length) % shuffledImages.length ||
                        index === 0;

                    return (
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
                                {isVisibleOrAdjacent && (
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        quality={isMobile ? 60 : 85} /* Reduzir qualidade massivamente no mobile pro first load */
                                        className="object-cover"
                                        style={{
                                            opacity: loadedImages.has(index) ? 1 : 0,
                                            transition: 'opacity 0.6s ease-in-out'
                                        }}
                                        priority={index === 0}
                                        loading={index === 0 ? "eager" : "lazy"}
                                        onLoad={() => {
                                            setLoadedImages(prev => new Set([...prev, index]));
                                            if (index === 0) setIsLoading(false);
                                        }}
                                    />
                                )}
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none z-20"></div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Controles de Navegação Removidos a pedido do usuário: Agora é 100% automático */}
        </div>
    );
}
