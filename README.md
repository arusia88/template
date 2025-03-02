# Next.js + Supabase 템플릿

이 프로젝트는 Next.js와 Supabase를 활용한 웹 애플리케이션 템플릿입니다. 인증 시스템과 다국어 지원이 포함되어 있어 새로운 프로젝트를 빠르게 시작할 수 있습니다.

## 템플릿 소개

이 템플릿은 모던 웹 애플리케이션 개발을 위한 기본 구조와 기능을 제공합니다. Next.js의 App Router와 Supabase의 인증 시스템을 활용하여 안전하고 확장 가능한 애플리케이션을 구축할 수 있습니다.

## 주요 기능

- **사용자 인증**: 이메일/비밀번호 로그인, 구글 소셜 로그인, 비밀번호 재설정 기능
- **다국어 지원**: i18n을 통한 다국어 지원 (현재 영어, 한국어 지원)
- **반응형 디자인**: 다양한 디바이스에서 원활하게 사용할 수 있는 반응형 UI
- **타입스크립트**: 타입 안전성을 위한 타입스크립트 지원
- **UI 컴포넌트**: 재사용 가능한 UI 컴포넌트 라이브러리

## 디렉토리 구조

- `app/`: Next.js App Router의 루트 디렉토리
  - `layout.tsx`: 모든 페이지에 공통으로 적용되는 기본 레이아웃
  - `page.tsx`: 루트 경로(`/`)의 랜딩 페이지
  - `(auth-pages)/`: 인증 관련 페이지 그룹
    - `sign-in/page.tsx`: 로그인 페이지
    - `sign-up/page.tsx`: 회원가입 페이지
    - `forgot-password/page.tsx`: 비밀번호 찾기 페이지
  - `dashboard/page.tsx`: 인증된 사용자를 위한 대시보드 페이지
  - `auth/callback/`: OAuth 콜백 처리
  - `actions.ts`: 서버 액션 (로그인, 회원가입 등)
- `components/`: 재사용 가능한 UI 컴포넌트
  - `ui/`: 기본 UI 컴포넌트 (버튼, 입력 필드 등)
  - `form-message.tsx`: 폼 메시지 컴포넌트
  - `google-login.tsx`: 구글 로그인 버튼
  - `language-switcher.tsx`: 언어 전환 컴포넌트
- `lib/`: 유틸리티 및 설정
  - `supabase/`: Supabase 관련 설정
  - `i18n.ts`: 다국어 지원 설정
  - `useUser.ts`: 사용자 정보 훅
- `public/`: 정적 파일 및 번역 리소스
  - `locales/`: 다국어 번역 파일

## 시작하기

1. 저장소 복제
```bash
git clone https://github.com/your-username/nextjs-supabase-template.git
cd nextjs-supabase-template
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 변수를 설정합니다:

