import './globals.css';
import Header from '@/components/layout/Header';

export const metadata = {
    title: 'R&A Serviços e Manutenções Elétricas',
    description: 'Especializada em prestação de serviços de intervenção em vegetação em linha de transmissão e redes de distribuição de MT/BT.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className="antialiased font-sans">
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
