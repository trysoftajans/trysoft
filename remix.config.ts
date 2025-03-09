import type { AppConfig } from "@remix-run/dev";

export default {
  serverBuildTarget: "netlify",
  // Build çıktısının nereye yazılacağını belirtin:
  serverBuildPath: "netlify/functions/server.js",
  // Geliştirmede (npm run dev) kendi server'ını kullansın, prod'da bu dosyayı kullanacak:
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  // Diğer Remix ayarları...
} satisfies AppConfig;
