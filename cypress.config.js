const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '147dte',
  e2e: {
    baseUrl: 'https://www.lamoda.by/'
  },
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  numTestsKeptInMemory: 0,
  chromeWebSecurity: false,
});
