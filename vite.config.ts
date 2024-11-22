import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ChatBot/', // substitua pelo nome do seu repositório no GitHub
});