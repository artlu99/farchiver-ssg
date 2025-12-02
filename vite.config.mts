import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [preact(), tsconfigPaths(), tailwindcss()],
	build: { outDir: "dist" },
});
