import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react"; // if using React
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(), // remove if not using React
    tailwindcss(),
  ],
});
