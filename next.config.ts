import type { NextConfig } from "next";

// Cuando corramos npm run deploy, setearemos DEPLOY_TARGET=gh-pages
const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";
const basePath = isGhPages ? "/epimigrapp-website" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // Requisito de GitHub Pages para imágenes estáticas
  },
};

export default nextConfig;
