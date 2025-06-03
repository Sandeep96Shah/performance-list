# 🍕 Optimized React Recipe App

A performant React-based application that fetches and displays recipes using [dummyjson.com](https://dummyjson.com/). This project is optimized for fast load times, efficient bundling, and minimal unused JavaScript.

---

## 🚀 Performance Optimizations

### ✅ 1. Removed Unused Packages

Used [`depcheck`](https://www.npmjs.com/package/depcheck) to identify and remove unused npm packages:

```bash
npx depcheck
# Review the list, then remove unused ones
npm uninstall <package-name>
```

### ✅ 2. Production Build with Minification

Ensured the app is built in production mode with `esbuild` minification for optimized JS size:

```json
// vite.config.js or similar
export default defineConfig({
  mode: "production",
  build: {
    minify: "esbuild",
  },
});
```

### ✅ 3. Preconnect for Faster API Response

Established early connections to the recipe API to reduce DNS + TLS handshake time:

```html
<link rel="preconnect" href="https://dummyjson.com" />
```

### ✅ 4. Preload Key Assets

Used `<link rel="preload">` for critical image assets to reduce LCP:

```html
<link rel="preload" href="/assets/pizza.webp" as="image" />
```

### ✅ 5. Improve LCP Image Loading Strategy

Used native image performance hints to prioritize above-the-fold images:

```jsx
<img
  src={image}
  alt="Recipe"
  loading={isLCP ? "eager" : "lazy"}
  fetchpriority={isLCP ? "high" : "auto"}
/>
```

This ensures that Largest Contentful Paint (LCP) images are loaded and rendered as early as possible.

---

## 🧱 Tech Stack

* **React**
* **Vite**
* **ESBuild** for minification
* **Lazy loading** with `React.lazy` and `Suspense`
* **Intersection Observer** for infinite scroll
* **Optimized image loading** and resource hinting

---

## 🛁 Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Serve production build (optional)
npm install -g serve
serve dist
```

---

## 📊 Lighthouse Performance Goals

| Metric                   | Target  |
| ------------------------ | ------- |
| First Contentful Paint   | = 0.3s  |
| Largest Contentful Paint | = 1.1s  |
| Total Blocking Time      | = 0ms   |
| Cumulative Layout Shift  | = 0     |
| Speed Index              | = 0.9s  |

---

## 🚹 Maintenance Notes

* Rerun `depcheck` regularly to prune unused code
* Reevaluate lazy-loaded components for criticality
* Monitor LCP in Lighthouse after content/image updates


## 👨‍🍳 Built with ❤️ for learning and performance.
