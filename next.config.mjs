/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain HTML site to /out,
  // which can be hosted on any static host (Azure Static Web Apps, Netlify, GitHub Pages, SAP BTP, ...).
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
