import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "VITE_");

	return {
		plugins: [
			react(),
			svgr(),
			eslint({
				fix: true,
				failOnError: false
			}),
			EnvironmentPlugin(env)
		],
		resolve: {
			alias: {
				assets: path.resolve(__dirname, "./src/assets"),
				atomicui: path.resolve(__dirname, "./src/atomicui"),
				core: path.resolve(__dirname, "./src/core"),
				hooks: path.resolve(__dirname, "./src/hooks"),
				services: path.resolve(__dirname, "./src/services"),
				stores: path.resolve(__dirname, "./src/stores"),
				theme: path.resolve(__dirname, "./src/theme"),
				types: path.resolve(__dirname, "./src/types"),
				"./runtimeConfig": "./runtimeConfig.browser"
			}
		},
		server: {
			port: 3000
		},
		build: {
			outDir: "./build"
		}
	};
});
