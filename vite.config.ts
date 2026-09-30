import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function redirectRootPlugin(base: string): Plugin {
  return {
    name: 'redirect-root',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/' || req.url === '') {
          res.writeHead(302, { Location: base });
          res.end();
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  const base = '/senal-agency/';

  return {
    base,
    plugins: [
      react(),
      redirectRootPlugin(base),
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
