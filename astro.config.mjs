// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import sitemap from 'astro-sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://rieger01.github.io/',
    devToolbar: {
        enabled: false
    },
    integrations: [
        react(),
        mdx(),
        compress(),
        sitemap()
    ]
});
