import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-project/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        fallback: "index.html", // 없어도 되지만 명시적으로 써도 됨
      },
    },
  },
});
