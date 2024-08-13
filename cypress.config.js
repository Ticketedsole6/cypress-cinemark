const { defineConfig } = require('cypress')
const {
  beforeRunHook,
  afterRunHook,
} = require('cypress-mochawesome-reporter/lib')
const mochawesome = require('cypress-mochawesome-reporter/plugin')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  screenshotOnRunFailure: true,
  reporterOptions: {
    reportDir: 'cypress/report',
    charts: true,
    reportPageTitle: 'Execution Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl:
      'https://cinemark-colombia-dev-staging-gzs859bsx-cinemark-colombia.vercel.app/',
    experimentalStudio: true,
    chromeWebSecurity: false, //it use to have not problems with search window.location object
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      mochawesome(on)
    },
  },
})
