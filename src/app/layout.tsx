import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pizza-italia-el-boalo.vercel.app'), // Cambiar por dominio real si existe
  title: "Pizza Italia - Mesón El Boalo | Auténtica Pizza Italiana",
  description: "Descubre la auténtica pizza italiana en El Boalo. Masa artesanal, ingredientes frescos y horno de piedra. ¡2x1 todos los miércoles! Haz tu pedido ahora.",
  openGraph: {
    title: "Pizza Italia | Auténtica Cocina Italiana en El Boalo",
    description: "La mejor pizza de la sierra. Masa fina, ingredientes frescos y ofertas increíbles. ¡2x1 todos los miércoles!",
    url: 'https://pizza-italia-el-boalo.vercel.app',
    siteName: 'Pizza Italia - Mesón El Boalo',
    images: [
      {
        url: '/logo.png', // Asegúrate de que esta imagen existe en public/
        width: 800,
        height: 600,
        alt: 'Pizza Italia Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pizza Italia | Auténtica Cocina Italiana",
    description: "Pizza artesanal en El Boalo. ¡2x1 los miércoles! Pide por WhatsApp.",
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-neutral-950 text-neutral-50 font-inter antialiased">
        <SmoothScroll />
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
