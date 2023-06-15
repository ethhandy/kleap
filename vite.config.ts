import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      Assets: path.resolve("./src/assets"),
      Components: path.resolve("./src/components"),
      Elements: path.resolve("./src/elements"),
      Hocs: path.resolve("./src/hocs"),
      Pages: path.resolve("./src/pages"),
      Routes: path.resolve("./src/routes"),
      Utils: path.resolve("./src/utils"),
    },
  },
});
