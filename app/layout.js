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

// const anton = Anton({
//   subsets: ["latin"],
//   weight: "600",
//   display: "swap",
//   variable: "--font-anton", 
// });

export const metadata = {
  title:"Empower Your Logistic Business with Dispatch Assist",
  description: "Dispatch Assist is a platform for truck drivers and companies! With our 24/7 service, we are clearly committed to supporting owner-operators and businesses of all sizes. We focus on finding the best freight and possible high rates which will maximize earnings, especially in such a challenging industry...",
  icons:{
  icon:['/favicon.ico?v=4'],
  apple:['/apple-touch-icon.png?v=4'],
  shortcut:['/apple-touch-icon.png']
}
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      {/* <body className={inter.className}>{children}</body> */}
            <body className={`${inter.className} ${oswald.variable}`}>{children}</body>

    </html>
  );
}


