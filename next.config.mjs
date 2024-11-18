/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    experimental: {
        serverActions: false,
      },
    images: {
        domains: [
          "files.edgestore.dev"
        ]
      }
};

export default config;