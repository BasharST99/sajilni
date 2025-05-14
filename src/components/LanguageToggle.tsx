import { useRouter } from "next/router"
import Link from "next/link"

export default function LanguageToggle() {
  const { locale, asPath } = useRouter()
  const otherLocale = locale === "ar" ? "en" : "ar"

  return (
    <Link href={asPath} locale={otherLocale}>
      <button className="bg-gray-200 px-4 py-2 rounded text-black">
        {otherLocale === "ar" ? "العربية" : "English"}
      </button>
    </Link>
  )
}
