import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vite.dev/config/
export default defineConfig({
	plugins: react(),
})
