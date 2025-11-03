/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactCompiler: true,

  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

  images: {
    remotePatterns: [new URL("https://cdn.myanimelist.net/images/**")],
  },
};

export default config;
