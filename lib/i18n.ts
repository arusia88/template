'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/public/locales/en/common.json';
import ko from '@/public/locales/ko/common.json';

const resources = {
  en: {
    common: en,
  },
  ko: {
    common: ko,
  },
};

// 브라우저 환경에서만 초기화하고, 이미 초기화되었는지 확인
const isBrowser = typeof window !== 'undefined';
if (isBrowser && !i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      defaultNS: 'common',
      fallbackLng: 'en',
      supportedLngs: ['en', 'ko'],
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n; 