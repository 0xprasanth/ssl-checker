import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Toast, ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "SSL Checker",
  description: "Check for SSL certificates for new domains",
  icons: [{ rel: "icon", url: "/images/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          {/* <ToastProvider> */}
          {children}
          <Toaster />
          {/* </ToastProvider> */}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
