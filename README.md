# blog.lhqs.ink

一个极简、现代、内容驱动的个人博客系统，基于 Next.js 15、MDX、Shiki 和 Tailwind CSS 构建，支持高亮、数学公式、响应式设计和流畅的页面转场。

## 项目简介

**blog.lhqs.ink** 是一个聚焦内容与极致体验的博客项目，支持 Markdown/MDX 写作，集成代码高亮、数学公式渲染、响应式导航和多级目录。适合开发者、设计师等对内容结构和可读性有较高要求的个人博客或知识库。

## 主要特性

- 🚀 基于 Next.js 15，支持 React Server Components
- 📝 全站 MDX 内容，支持 GFM 语法、数学公式（KaTeX）、自定义组件
- 🎨 Tailwind CSS v4，极简响应式设计
- 💡 代码高亮：Shiki + CSS 变量主题
- 🔄 `<ViewTransition/>` 实现无缝页面转场
- 🧭 一级/二级导航自动生成，支持动态内容
- 📦 TypeScript 全面支持

## 目录结构

```
├── app/                 # 应用主目录（Next.js App Router）
│   ├── layout.tsx       # 全局布局，含导航、字体、主题等
│   ├── globals.css      # 全局样式
│   ├── page.mdx         # 主页内容（MDX）
│   ├── thoughts/        # 文章/随笔目录
│   │   └── _articles/   # 文章内容（MDX 文件）
│   ├── projects/        # 项目介绍
│   ├── visuals/         # 可视化/作品集
│   ├── guestbook/       # 留言板
│   └── api/             # API 路由（如 /api/articles）
├── components/          # UI 组件（导航、卡片等）
├── assets/              # 静态资源（如字体、图片）
├── mdx-components.tsx   # 自定义 MDX 组件（代码高亮、图片、数学公式等）
├── next.config.ts       # Next.js 配置，含 MDX、图片、转场等
├── package.json         # 依赖与脚本
├── postcss.config.mjs   # PostCSS 配置
├── tailwind.config.js   # Tailwind 配置（如有）
└── tsconfig.json        # TypeScript 配置
```

## 技术栈

- **Next.js 15**  — React 19, App Router, RSC, MDX, ViewTransition
- **MDX/GFM**  — 支持 Markdown + JSX，文章内容灵活扩展
- **Shiki**  — 代码高亮，CSS 变量主题，支持多语言
- **KaTeX/react-katex**  — 数学公式渲染
- **Tailwind CSS 4**  — 原子化样式，响应式设计
- **TypeScript**  — 类型安全

## 快速开始

1. 安装依赖：
   ```bash
   pnpm install
   # 或 npm install / yarn install
   ```
2. 启动开发环境：
   ```bash
   pnpm dev
   # 或 npm run dev / yarn dev
   ```
3. 访问 [http://localhost:3000](http://localhost:3000) 查看博客

## 内容结构说明

- **主页**：`app/page.mdx`，支持 MDX/JSX 语法
- **文章**：`app/thoughts/_articles/*.mdx`，每篇文章可定义 metadata（如 title、date）
- **项目/作品/留言板**：分别在 `app/projects/`、`app/visuals/`、`app/guestbook/` 下
- **导航**：一级导航见 `components/navbar.tsx`，二级导航自动生成（如文章列表、项目锚点）
- **API**：如 `/api/articles`，用于动态获取文章元数据
- **自定义组件**：`mdx-components.tsx`，可在 MDX 中直接使用（如代码块、数学公式、卡片等）

## 文章元数据示例

每篇文章（如 `app/thoughts/_articles/xxx.mdx`）可定义：

```mdx
export const metadata = {
  title: '文章标题',
  date: '2024.07.08',
}
```

## 致谢

- [Next.js](https://nextjs.org/)
- [MDX](https://mdxjs.com/)
- [Shiki](https://shiki.style/)
- [Tailwind CSS](https://tailwindcss.com/)
- [KaTeX](https://katex.org/)
- [Vercel](https://vercel.com/)

---

> 本项目由 lhqs 基于[https://shud.in/](https://shud.in/)开发，欢迎 fork 和自定义扩展。
