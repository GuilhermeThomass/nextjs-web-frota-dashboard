import type { Metadata } from "next";
import { Rubik } from 'next/font/google'
import "./globals.css";

import SideBar from "./components/SideBar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Pró Saúde Frotas",
  description: "Ferramenta interna para gerenciamento de frota",
};

const rubik = Rubik({
    weight: ['600', '700'],
    style: ['normal'],
    subsets: ['latin'],
  })

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <body>
            <Providers>
                <div className={`${rubik.className} flex flex-row h-screen w-screen`} >
                    <SideBar/>
                    {children}
                </div>
            </Providers>
        </body>
    </html>
  );
}
