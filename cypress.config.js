const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    video: true,
    
  },
  projectId: "q2x5h6",
});
