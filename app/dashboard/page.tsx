'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { signOutAction } from '@/app/actions'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import Loading from '@/components/loading'

export default function Dashboard() {
  const { data: user, isLoading: loading } = useAuth()
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (loading || !mounted) {
    return <Loading />
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {t('dashboard.title')}
          </h1>
          <form>
            <Button
              formAction={signOutAction}
              variant="outline"
              className="text-white"
            >
              {t('auth.logout')}
            </Button>
          </form>
        </div>
      </header>
      <main className="flex-1 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-6 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {t('dashboard.welcome')}
            </h2>
            <p className="text-gray-500 text-center max-w-md">
              {t('dashboard.description')}
            </p>
            <div className="mt-8 bg-white p-4 rounded shadow-sm">
              <p className="text-sm text-gray-500">{t('dashboard.user_info')}:</p>
              <p className="font-mono text-sm mt-2">
                {JSON.stringify(
                  {
                    id: user.id,
                    email: user.email,
                  },
                  null,
                  2
                )}
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Next.js + Supabase 템플릿
        </div>
      </footer>
    </div>
  )
} 