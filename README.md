# Dashboard App

현대적인 대시보드 애플리케이션입니다. Next.js, TypeScript, 그리고 shadcn/ui를 사용하여 구축되었습니다.

## 📋 프로젝트 개요

이 프로젝트는 고객 활동, 상품 통계, 거래 정보 등을 시각화하는 대시보드를 제공합니다. 반응형 UI와 다크모드 지원을 포함하고 있습니다.

## 📁 프로젝트 구조

```
dashboard-app/
├── next-app/                 # Next.js 애플리케이션
│   ├── app/                  # Next.js 13+ App Router
│   │   ├── layout.tsx        # 루트 레이아웃
│   │   ├── page.tsx          # 홈페이지
│   │   └── globals.css       # 전역 스타일
│   │
│   ├── components/           # React 컴포넌트
│   │   ├── app-sidebar.tsx   # 사이드바
│   │   ├── theme-provider.tsx # 테마 제공자
│   │   │
│   │   ├── dashboard/        # 대시보드 관련 컴포넌트
│   │   │   ├── topbar.tsx    # 상단 바
│   │   │   ├── stat-card.tsx # 통계 카드
│   │   │   ├── customers-activity-chart.tsx  # 고객 활동 차트
│   │   │   ├── customers-active.tsx          # 활성 고객
│   │   │   ├── product-activity-chart.tsx    # 상품 활동 차트
│   │   │   └── transaction-table.tsx         # 거래 테이블
│   │   │
│   │   └── ui/              # UI 기본 컴포넌트 (shadcn/ui)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── table.tsx
│   │       └── ...
│   │
│   ├── hooks/               # Custom React Hooks
│   │   └── use-mobile.ts    # 모바일 감지 훅
│   │
│   ├── lib/                 # 유틸리티 함수
│   │   └── utils.ts         # 공유 유틸리티
│   │
│   ├── public/              # 정적 자산
│   │
│   ├── next.config.ts       # Next.js 설정
│   ├── tsconfig.json        # TypeScript 설정
│   ├── postcss.config.mjs   # PostCSS 설정
│   └── package.json         # 의존성
│
└── README.md                # 이 파일
```

## 🚀 시작하기

### 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

1. 저장소를 클론합니다:

```bash
git clone <repository-url>
cd dashboard-app
```

2. 의존성을 설치합니다:

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

그 다음 브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 🛠️ 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Tailwind CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: Chart library (recharts or similar)
- **Package Manager**: npm

## 📦 주요 기능

- **대시보드**: 실시간 통계 및 차트 표시
- **고객 관리**: 활성 고객 정보 및 활동 분석
- **상품 통계**: 상품 활동 데이터 시각화
- **거래 기록**: 거래 정보 테이블 표시
- **반응형 디자인**: 모든 디바이스에서 최적화된 UI
- **다크모드**: 테마 전환 지원

## 📝 컴포넌트 사용법

### UI 컴포넌트 추가

shadcn/ui에서 새로운 UI 컴포넌트를 추가합니다:

```bash
npx shadcn@latest add button
```

컴포넌트는 `components/ui/` 디렉토리에 자동으로 배치됩니다.

### 컴포넌트 import

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## 🎨 스타일링

이 프로젝트는 Tailwind CSS를 사용합니다. 커스텀 스타일은 다음 파일에 정의됩니다:

- `app/globals.css` - 전역 스타일
- `components/` - 컴포넌트별 인라인 Tailwind 클래스

## 📱 반응형 디자인

`hooks/use-mobile.ts` 훅을 사용하여 모바일 장치를 감지할 수 있습니다:

```tsx
import { useMobile } from "@/hooks/use-mobile";

export default function MyComponent() {
  const isMobile = useMobile();

  return (
    <div className={isMobile ? "grid-cols-1" : "grid-cols-4"}>{/* 내용 */}</div>
  );
}
```

## 🔧 설정

### TypeScript

`next-app/tsconfig.json`에서 TypeScript 설정을 조정할 수 있습니다.

### Next.js

`next-app/next.config.ts`에서 Next.js 설정을 수정할 수 있습니다.

## 📚 더 알아보기

- [Next.js 문서](https://nextjs.org/docs)
- [TypeScript 문서](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com/)

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.

## 👤 기여

이슈나 풀 리퀘스트는 언제든 환영합니다!

---

**마지막 업데이트**: 2026년 8월
