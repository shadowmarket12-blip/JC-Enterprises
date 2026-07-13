import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/navbar/Navbar";

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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
