import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Each build gets an id. The page compares its own id with version.json on the server
// to tell the user a newer version is available.
const BUILD_ID = Date.now().toString(36);

export default defineConfig({
  base: './',
  define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
  plugins: [
    react(),
    {
      name: 'emit-version',
      generateBundle() {
        this.emitFile({ type: 'asset', fileName: 'version.json', source: JSON.stringify({ id: BUILD_ID }) });
      },
    },
  ],
  test: { environment: 'node' },
});
