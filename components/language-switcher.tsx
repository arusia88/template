'use client';

import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { getLanguageCode } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGUAGES = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentLanguage = i18n.language;
    const languageCode = getLanguageCode(currentLanguage);
    if (currentLanguage !== languageCode) {
      i18n.changeLanguage(languageCode);
    }
  }, [i18n]);

  const changeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, [i18n]);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="fixed top-4 right-4 z-50 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            <path d="M2 12h20"/>
          </svg>
          <span className="text-[10px] absolute -top-0 right-2 text-gray-500">{i18n.language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={i18n.language === lang.code ? 'bg-accent' : ''}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function LanguageSwitcherWrapper() {
  const pathname = usePathname();
  const showLanguageSwitcher = ['/login', '/sign-up', '/sign-in'].includes(pathname);

  if (!showLanguageSwitcher) {
    return null;
  }

  return <LanguageSwitcher />;
}
