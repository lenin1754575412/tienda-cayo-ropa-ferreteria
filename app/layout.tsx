import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cayo | Moda, Ferretería y Hogar",
  description: "Compra ropa, herramientas y productos para el hogar en Cayo. Envíos a todo el Perú y atención por WhatsApp.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
