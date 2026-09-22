const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://adopet-frontend-cypress.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
