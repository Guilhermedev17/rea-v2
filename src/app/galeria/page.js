import React from 'react';
import Footer from '@/components/layout/Footer';
import Gallery from '@/components/sections/Gallery';

export const metadata = {
    title: 'Galeria de Serviços | R&A Serviços Elétricos',
    description: 'Conheça nosso portfólio de serviços realizados em campo, desde supressão vegetal a manutenção em redes MT/BT.',
};

export default function GaleriaPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex flex-col pt-24 md:pt-32">
            <main className="flex-grow">
                {/* O Componente da Galeria entrará aqui */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                        Nossa <span className="text-emerald-600">Galeria</span>
                    </h1>
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
                        Explore nosso portfólio de trabalhos realizados em campo. Garantimos excelência, segurança e respeito ao meio ambiente em cada projeto.
                    </p>

                    <Gallery />
                </div>
            </main>
            <Footer />
        </div>
    );
}
