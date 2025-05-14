import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { IntlProvider } from "next-intl"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"


if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("ENVIRONMENT_FALLBACK")
    ) {
      return;
    }
    originalConsoleError(...args);
  };
}

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  useEffect(() => {
    const html = document.documentElement
    html.lang = locale || "en"
    html.dir = locale === "ar" ? "rtl" : "ltr"
  }, [locale])

  return (
    <IntlProvider messages={pageProps.messages} locale={locale || 'en'}>
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 min-h-screen">
        <Navbar />  
        <Component {...pageProps} />
      </div>
    </IntlProvider>
  )
}
