import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve("./index.html"), // Resolve paths relative to the current directory
        about: resolve("./about.html"),
        contact: resolve("./contact.html"),
        products: resolve("./products.html"),
        addToCart: resolve("./addToCart.html"),
      },
    },
  },
});