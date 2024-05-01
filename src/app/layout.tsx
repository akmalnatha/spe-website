import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { League_Spartan } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["100", "300", "400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "600", "700", "800"],
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
  weight: ["100", "300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-display",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SPE UI SC",
  description: "SPE Organization Website",
  icons: "./assets/SPE_UI_SC.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${leagueSpartan.variable} ${lato.variable} ${plusJakartaSans.variable} bg-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
