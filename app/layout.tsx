import { hasEnvVars } from "@/lib/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { AppProvider } from "@/lib/AppContext";
import Providers from "@/lib/providers";
import { GoogleAnalytics } from '@next/third-parties/google'
import { LanguageSwitcherWrapper } from "@/components/language-switcher";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Template",
  description: "Template, Description",
  openGraph: {
    images: [
      {
        url: '/thumbsup_thumbnail.jpg',
        width: 1408,
        height: 768,
        alt: 'Template Preview Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/thumbsup_thumbnail.jpg'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <AppProvider>
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main className="flex-grow">
                {children}
                <Toaster />
                <LanguageSwitcherWrapper />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""} />
              </main>
            </ThemeProvider>
          </Providers>
        </AppProvider>
      </body>
    </html>
  );
}
