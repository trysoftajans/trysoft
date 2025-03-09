import type { AppConfig } from "@remix-run/dev";

export default {
  serverBuildTarget: "netlify",
  serverBuildPath: "netlify/functions/server.js",
  // Diğer Remix ayarları...
} satisfies AppConfig;
