import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { redirect } from "next/navigation";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 언어 코드 반환 함수
export const getLanguageCode = (language: string) => {
  const languageCode = language.split('-')[0];  
  if (SUPPORTED_LANGUAGES.includes(languageCode)) {
    return languageCode;
  }
  return 'en';
}

// 타이틀 3등분 함수 추가
export const splitTitleIntoThirds = (title: string): [string, string, string] => {
  const length = title.length;
  const firstPartLength = Math.floor(length / 3);
  const secondPartLength = Math.floor(length / 3);

  const first = title.slice(0, firstPartLength);
  const middle = title.slice(firstPartLength, firstPartLength + secondPartLength);
  const last = title.slice(firstPartLength + secondPartLength);

  return [first, middle, last];
}

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}

export function formatTimeAgo(dateString: string): { key: string; value: number } {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    
    if (interval >= 1) {
      // 복수형 처리를 위해 단위와 값을 함께 반환
      return {
        key: `timeago.${unit}${interval > 1 ? 's' : ''}`,
        value: interval
      };
    }
  }

  return {
    key: 'timeago.just_now',
    value: 0
  };
}

type GAEventParams = {
  [key: string]: string | number | boolean | undefined
}

export const sendGAEvent = (eventName: string, params: GAEventParams = {}) => {
  const enhancedParams = {
    ...params,
    uid: getUserId()
  }
  if (process.env.NODE_ENV === 'development') {
    console.log('sendGAEvent', eventName, enhancedParams);
    return;
  }
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, enhancedParams);
  }
};

/**
 * 버튼 클릭 이벤트를 추적하는 함수
 * @param buttonName 버튼의 식별자
 * @param category 버튼이 속한 카테고리/페이지
 * @param additionalParams 추가 파라미터
 */
export const trackButtonClick = (
  buttonName: string,
  category: string,
  additionalParams: GAEventParams = {}
) => {
  sendGAEvent('button_click', {
    button_name: buttonName,
    category: category,
    ...additionalParams
  });
};

const getUserId = () => {
  // localStorage에서 user_id를 가져오거나 새로 생성
  let userId = localStorage.getItem('ga_user_id');
  if (!userId) {
    userId = `user_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('ga_user_id', userId);
  }
  return userId;
};