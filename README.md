##

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /><img src="https://img.shields.io/badge/Vitest-%236E9F18?style=for-the-badge&logo=Vitest&logoColor=%23fcd703" /><img src="https://img.shields.io/badge/MSW-3c1900?style=for-the-badge&logo=mockserviceworker&logoColor=cc4400"/><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /><img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white"/><img src="https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white"/><img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/><img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"/>

## 環境設定方法

```
npm i
```

```
npm run dev
```

テスト実行

```
npm run test
```

## フレームワーク・ライブラリバージョン管理表

2025 年 2 月 24 日に npm 公式サイトから確認したバージョンを採用しました。（非最新版も含まれる）  
node のみ意図的に LTS の 22 系を選択しています

```
"dependencies"
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "next": "15.1.7"

"devDependencies"
    "axios": "1.7.9",
    "@playwright/test": "1.50.1",
    "@testing-library/dom": "10.4.0",
    "@testing-library/jest-dom": "6.6.3",
    "@testing-library/react": "16.2.0",
    "@testing-library/user-event": "14.6.1",
    "@types/node": "22.3.0",
    "@types/react": "19.0.10",
    "@types/react-dom": "19.0.4",
    "@vitejs/plugin-react": "4.3.4",
    "@vitest/coverage-v8": "3.0.6",
    "eslint": "9.21.0",
    "eslint-config-next": "15.1.7",
    "happy-dom": "16.6.0",
    "jsdom": "26.0.0",
    "msw": "2.6.8",
    "postcss": "8.5.3",
    "tailwindcss": "3.4.1",
    "typescript": "5.7.3",
    "vitest": "3.0.6"
```

node アップデートスケジュール

https://github.com/nodejs/release#release-schedule

## npm run コマンド表

```
"lint": "next lint",
"format": "npx prettier './\*_/_.{tsx,ts}' --write",
"test": "vitest",
"e2e": "npx playwright test",
"coverage": "vitest run --coverage",
"check:all": "npm run lint && npm run format"
```
