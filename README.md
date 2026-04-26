# fil-lost.org

сайт-визитка

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

Коллекция `src/content/blog/` подготовлена под будущий блог.

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
