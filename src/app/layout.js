import { Suspense } from "react";
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
  title: "JC Enterprises",
  description:
    "JC Enterprises — premium quality products for your home and business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-full flex flex-col font-poppins">
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
