import "./globals.css";

import { cn } from "@/lib/utils";
import { geistSans, geistMono, tajawal } from "./fonts/fonts";
import { constructMetadata } from "@/lib/metadata";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={cn("antialiased", geistSans.variable, geistMono.variable, tajawal.variable)}
      >
       <ThemeProvider>
         <LanguageProvider>
           {children}
         </LanguageProvider>
       </ThemeProvider>
      </body>
    </html>
  );
}
