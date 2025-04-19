// app.config.ts
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
// import path from "path";

export default defineConfig({
	vite: {
		plugins: [
			tsConfigPaths({
				projects: ["./tsconfig.json"],
			}),
		],
		// resolve: {
		// 	alias: {
		// 		"@": path.resolve(__dirname, "./app"),
		// 	},
		// },
	},
});
