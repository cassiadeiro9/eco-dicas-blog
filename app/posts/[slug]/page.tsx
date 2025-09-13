import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Blog da Cassia Deiró",
  description: "Um espaço para falar sobre meio ambiente e sustentabilidade 🌱",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-green-50 text-gray-900">
        <header className="bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">🌱 Blog da Cassia Deiró</Link>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">Sobre</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>

        <footer className="border-t bg-green-100">
          <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-700">
            © 2025 Blog da Cassia Deiró — Meio Ambiente e Sustentabilidade 🌍
          </div>
        </footer>
      </body>
    </html>
  );
}

