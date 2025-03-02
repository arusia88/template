'use client'

import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import GoogleLoginButton from "@/components/google-login";

export default function Login({ searchParams }: { searchParams: Message & { email?: string } }) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-300">{t('auth.login')}</h1>
          <p className="mt-2 text-sm text-gray-400">
            {t('auth.no_account')}{" "}
            <Link className="text-orange-500 hover:underline" href="/sign-up">
              {t('auth.signup')}
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-300">{t('common.email')}</Label>
              <Input 
                name="email" 
                placeholder={t('common.email_placeholder')}
                required 
                defaultValue={searchParams.email || ''}
                className="bg-gray-800 border-gray-700 text-gray-300 mt-1"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-gray-300">{t('auth.password')}</Label>
              </div>
              <Input
                type="password"
                name="password"
                placeholder={t('auth.password_placeholder')}
                required
                className="bg-gray-800 border-gray-700 text-gray-300 mt-1"
              />
            </div>
            <div>
                <Link
                  className="text-sm text-orange-500 hover:underline"
                  href="/forgot-password"
                >
                  {t('auth.forgot_password')}
                </Link>
            </div>
          </div>
          <SubmitButton 
            pendingText={t('auth.logging_in')} 
            formAction={signInAction}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            {t('auth.login')}
          </SubmitButton>
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800 text-gray-400">
                  {t('auth.or_continue_with')}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <GoogleLoginButton />
            </div>
          </div>
          <FormMessage message={searchParams} />
        </form>
      </div>
    </div>
  );
}
