// @ts-check

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  // next.js のコンフィグ
  reactStrictMode: true,
  distDir: 'build',
  images: {
    unoptimized: true
  }
});
