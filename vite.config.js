import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-icons/fa', // Agrega aquí todos los íconos que utilices en tu proyecto
        'react-icons/ai',
        'react-icons/bs',
        'react-icons/gr',
        // Agrega más íconos aquí si los necesitas
      ],
    },
  },
})
