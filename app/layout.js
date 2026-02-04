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

 manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url:"/apple-icon.png"},
      { url:"/logobrowser.png"},
      { url:"/android-chrome-192x192.png"},
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "maskable-icon",
        url: "/maskable-icon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    
            <body className={`${inter.className} ${oswald.variable}`}>{children}</body>

    </html>
  );
}