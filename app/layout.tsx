export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" strategy="lazyOnload"/>
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
        <df-messenger
          intent="WELCOME"
          chat-title="Horizon"
          agent-id="a95543ad-2945-48ec-982d-11f81dc7feb9">
          language-code="en"
         </df-messenger>
      </body>

    </html>
  );
}
