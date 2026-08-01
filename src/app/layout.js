import { Suspense } from "react";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/navbar/Navbar";
import { CartProvider } from "@/Components/providers/CartProvider";
import Footer from "@/Components/footer/Footer";
import ScrollToTop from "@/Components/ScrollToTop";
import StyledJsxRegistry from "./registry";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Best Electrical Shop in Bhubaneswar | JC Enterprises",
  description:
    "JC Enterprises — Bhubaneswar's trusted electrical shop for 35+ years. Genuine branded products, retail & wholesale, home delivery, bulk orders available.",
  verification: {
    google: "2Uk8SvVeMIiZUmm-zd8zgwgPsUsEsvw_S5j19pEsDi0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-full flex flex-col font-poppins">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M3WJMKDCZG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M3WJMKDCZG');
          `}
        </Script>

        <StyledJsxRegistry>
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
