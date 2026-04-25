# fil-lost.org

Персональный статический сайт-визитка на Astro с контентом через MDX и production-образом на nginx.

## Стек

- Astro + TypeScript
- Markdown/MDX для контента
- статическая сборка
- минимальный JavaScript
- Docker image на nginx

## Где редактировать контент

- Главная страница: [src/content/pages/home.mdx](src/content/pages/home.mdx)
- SEO и общие константы: [src/lib/site.ts](src/lib/site.ts)
- Глобальные стили: [src/styles/global.css](src/styles/global.css)

Коллекция `src/content/blog/` уже подготовлена под будущий блог.

## Команды

```bash
npm run dev
npm run build
npm run preview
```

## Docker

```bash
docker build -t fil-lost-site .
docker run --rm -p 8080:80 fil-lost-site
```
