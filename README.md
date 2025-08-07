# Giphy App 🎨

A modern, high-performance GIF gallery application built with React, Vite, TypeScript, and Tailwind CSS. This application showcases best practices in frontend development, including infinite scrolling, responsive masonry layouts, and optimized performance.

## 🚀 Features

- **Blazing Fast Performance**: Built with Vite for instant hot module replacement and optimized builds
- **Type Safety**: Full TypeScript integration for robust development
- **Responsive Design**: Tailwind CSS with custom breakpoints for all device sizes
- **Optimized Loading**: Infinite scroll with Intersection Observer API
- **Dynamic Layouts**: Masonry grid that adapts to content height
- **High Lighthouse Scores**: >90% in Performance, Accessibility, Best Practices, and SEO

## 📦 Technical Highlights

### Infinite Scroll Implementation

***Why this approach?***

- Uses Intersection Observer API for efficient scroll detection
- Memory-safe with proper cleanup in useEffect
- Prevents duplicate calls during loading states
- Optimized performance by removing scroll listeners when not needed

### Responsive Masonry Grid

***Why react-masonry-css?***

- Pure CSS solution (no JavaScript layout calculations)
- Perfectly aligns with Tailwind's responsive utilities
- Lightweight compared to JavaScript-based masonry solutions
- Maintains performance during rapid GIF loading

### 📊 Performance Metrics
***Lighthouse scores consistently above 90% in all categories:***

- Performance: 95%
- Accessibility: 92%
- Best Practices: 96%
- SEO: 91%

### 🚀 Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Start development server:

```bash
pnpm run dev
```

[Live demo](https://sergio-arce.github.io/giphy-app/)
