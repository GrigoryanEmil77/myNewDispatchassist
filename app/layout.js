import "./globals.css";
import { Inter, Anton } from "next/font/google";
import { Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-oswald",
});



export const metadata = {
  title:"Empower Your Logistic Business with Dispatch Assist",
  description: "Dispatch Assist is a platform for truck drivers and companies! With our 24/7 service, we are clearly committed to supporting owner-operators and businesses of all sizes. We focus on finding the best freight and possible high rates which will maximize earnings, especially in such a challenging industry...",

 icons: [
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    { url: "/maskable-icon.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }
  ]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    
            <body className={`${inter.className} ${oswald.variable}`}>{children}</body>

    </html>
  );
}


