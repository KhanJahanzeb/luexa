import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // The contact/lead forms POST here (see src/components/LeadPopup.jsx and
      // src/pages/Contact.jsx). The PHP backend still lives in the original
      // ../lunexa folder and is served by XAMPP's Apache on port 80.
      '/process-form.php': {
        target: 'http://localhost',
        changeOrigin: true,
        rewrite: (path) => path.replace('/process-form.php', '/lunexa/process-form.php'),
      },
    },
  },
})
