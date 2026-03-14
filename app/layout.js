
import "./globals.css";
import { Inter } from "next/font/google";
import { Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-oswald",
});

export const metadata = {
  metadataBase: new URL("https://www.dispatch-assist.com"),

  title: {
    default: "Empower Your Logistic Business with Dispatch Assist",
    template: "%s | Dispatch Assist"
  },

  description:"Dispatch Assist is a platform for truck drivers and companies! With our 24/7 service, we are clearly committed to supporting owner-operators and businesses of all sizes. We focus on finding the best freight and possible high rates which will maximize earnings, especially in such a challenging industry...",

  applicationName: "Dispatch Assist",

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Dispatch Assist",
    siteName: "Dispatch Assist",
    url: "https://www.dispatch-assist.com",
    type: "website",
   },

icons: {
  icon: [
    { url: "/favicon_48.png",sizes: "48x48", type: "image/png"  },
    { url: "/favicon_64.png",sizes: "64x64", type: "image/png"  },
    { url: "/favicon_180.png",sizes: "180x180", type: "image/png"  },
    { url: "/favicon_512.png", sizes: "512x512", type: "image/png" },
   
  ],
  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180" }
  ]
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dispatch Assist",
              url: "https://www.dispatch-assist.com",
              logo: "https://www.dispatch-assist.com/favicon.ico",
            }),
          }}
        />
      </head>

      <body className={`${inter.className} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}