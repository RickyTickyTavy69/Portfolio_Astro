import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://RickyTickyTavy69.github.io",
  base: "/Portfolio_Astro",
  integrations: [react()],
});
