import type { AppConfig } from "@remix-run/dev";

export default {
  serverBuildTarget: "netlify",
  serverBuildPath: "netlify/functions/server.js",
  // Geliştirme modunda Remix kendi server'ını kullanır; production’da adaptör çalışır.
  // Diğer Remix ayarları...
} satisfies AppConfig;
