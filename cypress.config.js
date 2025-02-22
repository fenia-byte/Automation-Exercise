const { defineConfig } = require("cypress");

require('dotenv').config();

module.exports = defineConfig({
  chromeWebSecurity: false,
  
  e2e: {
    baseUrl:process.env.pruductListURL,
    setupNodeEvents(on, config) {
      on("task", {
      })
      
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    },
  env: {
  },
});
