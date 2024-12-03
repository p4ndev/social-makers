import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/",
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) { }
  },
});
