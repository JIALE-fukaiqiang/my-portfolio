# 符开强 -- 新媒体运营与内容创作作品集

符开强的个人作品集落地页，基于 **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion** 构建。

## 内容亮点

- 传播与策划专业，GPA 3.6（专业前 10%）
- 小红书账号「Delta攻略铺」从 0 到 1408 粉丝冷启动
- 广东省职业院校技能大赛融媒体内容策划与制作省级二等奖
- 中国大学生广告艺术节学院奖短视频类优秀奖

## 功能特性

- 暗色主题（背景色 `#0C0C0C`）
- Kanit Google 字体
- 渐入动画与磁吸效果
- 滚动驱动的作品展示墙
- 逐字显现的个人介绍
- 粘性堆叠的项目卡片
- 响应式设计

## 项目结构

```
jack-3d-portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── components/
    │   ├── FadeIn.tsx
    │   ├── Magnet.tsx
    │   ├── AnimatedText.tsx
    │   ├── ContactButton.tsx
    │   └── LiveProjectButton.tsx
    └── sections/
        ├── HeroSection.tsx
        ├── MarqueeSection.tsx
        ├── AboutSection.tsx
        ├── ServicesSection.tsx
        └── ProjectsSection.tsx
```

## Getting Started

### Prerequisites

Make sure you have **Node.js** (version 18 or higher) and **npm** installed on your machine.

### Installation

1. Open a terminal and navigate to the project folder:

```bash
cd C:\Users\hp\jack-3d-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## 自定义内容

- 修改 `src/sections/` 中的文字内容
- 替换 `public/images/` 和 `public/videos/` 中的图片和视频文件
- 在 `src/sections/ProjectsSection.tsx` 中更新项目信息
- 调整颜色可在 `tailwind.config.js` 和 `src/index.css` 中修改

## 依赖

- react ^18.3.1
- react-dom ^18.3.1
- framer-motion ^12.38.0
- lucide-react ^0.344.0
- tailwindcss ^3.4.1
- vite ^5.1.4
- typescript ^5.3.3
