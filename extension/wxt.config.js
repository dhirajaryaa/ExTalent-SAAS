import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// See https://wxt.dev/api/config.html
export default defineConfig({
  // change default dev server port
  dev: {
    server: {
      port: 4000,
    },
  },
  modules: ["@wxt-dev/module-react"],
  alias: {
    "@": path.resolve(__dirname, "./"),
  },
  manifest: ({ browser, manifestVersion, mode, command }) => {
    return {
      name: "ExTalent",
      short_name: "ExTalent",
      version: "1.0.0",
      description: "Job score Generator",
      permissions: [
        "activeTab",
        "cookies",
        "contextMenus",
        "tabs",
        "scripting",
        "contentSettings",
        "storage",
      ],
      host_permissions: [
        "http://localhost/*",
        "https://localhost/*",
        "https://www.linkedin.com/*",
       "https://dhirajarya.xyz/*"
      ],
    };
  },
  vite: () => ({
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"), // or "./src" if using src directory
      },
    },
  }),
});
