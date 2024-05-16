const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '147dte',
  // plugins: {
  //   setupNodeEvents(on, config) {
  //   },
  // },
  e2e: {
    // setupNodeEvents(on, config) {
    // },
    baseUrl: 'https://www.lamoda.by/'
  },
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  numTestsKeptInMemory: 0,
  chromeWebSecurity: false,
});
