import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// using envPrefix VITE_ & import.meta.env -- exposes the variables to client
// to use variables without the envPRefix we need to deifne the config with those variables
// Create environment-specific .env files (e.g., .env.development, .env.production) to store different configurations for different environments.
// Vite will automatically load the appropriate .env file based on the current environment (development or production). 

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  
  // loading the .env file based on mode (e.g. .env.production)
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tailwindcss()],
    define: {
      __SOUNDS__: JSON.stringify(env.SOUNDS),
      __IMAGES__: JSON.stringify(env.IMAGES),
      __ALARMSOUND__: env.ALARM_SOUND,
    },
  };
});
