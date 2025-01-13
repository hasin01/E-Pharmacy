import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';
// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8080,
  },

  base: "/E-Pharmacy/",

  

    plugins: [react(), svgr()],

  
})
