import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://fil-lost.org",
  output: "static",
  trailingSlash: "never",
  integrations: [mdx(), sitemap()]
});

