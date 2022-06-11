import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import configPaths from 'vite-tsconfig-paths';
import { CustomHmr } from './src/Utils/customHmr';

export default defineConfig({
    plugins: [
        react(),
        configPaths(),
        CustomHmr()
    ]
})
