import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configured for https://github.com/Shivang0/PRD-Outthink/
  base: '/PRD-Outthink/',
});