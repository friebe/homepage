import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import icon from 'astro-icon';
import db from "@astrojs/db";


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [tailwind({
    nesting: true
  }), db(), icon()]
});