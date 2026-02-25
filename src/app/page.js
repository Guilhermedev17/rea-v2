import React from 'react';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Clients from '@/components/sections/Clients';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex flex-col pt-16 md:pt-20">
            <main className="flex-grow">
                <Hero />
                <Services />
                <Clients />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
