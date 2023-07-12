const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hjos3m',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
