"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold">{t('brand.name')}</h1>
          <p className="text-xl text-gray-300">
            {t('brand.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                {t('common.get_started')}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <footer className="py-6 bg-gray-900 text-center text-gray-400">
        <p>{t('common.copyright', { year: new Date().getFullYear() })}</p>
      </footer>
    </div>
  )
} 