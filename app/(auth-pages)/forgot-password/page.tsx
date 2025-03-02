'use client'

import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function ForgotPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-300">{t('auth.reset_password')}</h1>
          <p className="mt-2 text-sm text-gray-400">
            {t('auth.reset_password_description')}
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
                className="bg-gray-800 border-gray-700 text-gray-300 mt-1"
              />
            </div>
          </div>
          <SubmitButton 
            formAction={forgotPasswordAction}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            {t('auth.get_reset_link')}
          </SubmitButton>
          <div className="text-center">
            <Link href="/sign-in" className="text-orange-500 hover:underline text-sm">
              {t('auth.back_to_login')}
            </Link>
          </div>
          <FormMessage message={searchParams} />
        </form>
      </div>
    </div>
  );
}
