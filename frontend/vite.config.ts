import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	base: '/notes-react',
	css: {
		postcss: 'postcss.config.js',
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src/"),
		}
	}
})