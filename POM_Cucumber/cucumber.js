module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    requireModule: [
      "ts-node/register"
    ],
    require: [
      "src/test/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    paths: [
      "src/test/features/**/*.feature"
    ],
    publishQuiet: true,
    dryRun: false,
    format: [
      "progress",
      "json:reports/cucumber-report.json",
      "html:reports/cucumber-report.html",
      "allure-cucumberjs/reporter",
      "rerun:reports/rerun/rerun.txt"
    ],
    parallel: 2
  },
  rerun: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    requireModule: [
      "ts-node/register"
    ],
    require: [
      "src/test/steps/**/*.ts",
      "src/hooks/**/*.ts"
    ],
    publishQuiet: true,
    dryRun: false,
    format: [
      "progress",
      "json:reports/rerun-report.json",
      "html:reports/rerun-report.html",
      "allure-cucumberjs/reporter"
    ],
    parallel: 1
  }
};