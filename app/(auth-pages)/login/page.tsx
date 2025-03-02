"use client"
import GoogleLoginButton from '@/components/google-login'
import { Suspense } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Loading from '@/components/loading'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import React from 'react'

export default function Component() {
  const router = useRouter()
  const { t } = useTranslation()
  const [isMounted, setIsMounted] = React.useState(false)

  const handleEmailLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
    window.location.href = `/sign-in?email=${encodeURIComponent(email)}`;
  };

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-300">{t('brand.name')}</h1>
        </div>
        <div className="w-full max-w-sm mx-auto space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-300">{t('common.email')}</Label>
              <Input
                name="email"
                placeholder={t('common.email_placeholder')}
                required
                className="w-full bg-gray-800 border-gray-700 text-gray-300 mt-1"
              />
            </div>
            <Button
              variant="outline"
              className="w-full h-11 bg-orange-500 text-white border-orange-500 hover:border-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={handleEmailLogin}
            >
              {t('auth.login')}
            </Button>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-400">{t('auth.no_account')} </span>
            <Link 
              href="/sign-up" 
              className="text-orange-500 hover:underline"
            >
              {t('auth.signup')}
            </Link>
          </div>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gradient-to-b from-gray-900 to-gray-800 px-2 text-gray-400">{t('auth.or_continue_with')}</span>
            </div>
          </div>

          <div className="w-full h-11">
            <Suspense fallback={<Loading />}>
              <GoogleLoginButton />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}