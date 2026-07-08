const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "reports/cucumber-json",
  reportPath: "reports/html",
  reportName: "Playwright BDD Report",
  pageTitle: "Demo_WebShop",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
device: "Local Machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "LMS" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },      ],    },  });

