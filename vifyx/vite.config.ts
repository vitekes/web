import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
			services: path.resolve(__dirname, './src/assets'),
			components: path.resolve(__dirname, './src/components'),
			images: path.resolve(__dirname, './src/images'),
		},
	},
	server: {
		port: 3000,
	},
	plugins: [react()],
	build: {
		outDir: 'dist',
	},
})
