import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://colorya.bumsteed.site",
  trailingSlash: "never",
  integrations: [sitemap()],
});
