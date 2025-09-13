import './globals.css';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export const metadata = {
  title: 'Blog da Cassia Deiró',
  description: 'Um blog sobre meio ambiente',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Cabeçalho */}
        <header className="header">
          <div className="container">
            <h1 className="logo">🌱 Blog EcoDicas Sustentáveis</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/meio-ambiente">Meio Ambiente</Link>
            </nav>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main>{children}</main>

        {/* Rodapé */}
        <footer className="footer">
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" className="social-icon" style={{ backgroundColor: '#E1306C' }}>
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/" target="_blank" className="social-icon" style={{ backgroundColor: '#FF0000' }}>
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" className="social-icon" style={{ backgroundColor: '#000000' }}>
              <FaTiktok />
            </a>
          </div>
          <p>© 2025 Blog da Cassia Deiró</p>
        </footer>
      </body>
    </html>
  );
}

