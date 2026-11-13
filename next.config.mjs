import { runPrivacyGate } from "./scripts/check-synthetic-seed.mjs";

// Next carga esta configuración incluso si se invoca su binario directamente.
// Así el gate no depende únicamente del hook `npm run prebuild`.
runPrivacyGate();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
