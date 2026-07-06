const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "reports",
    reportPath: "reports/html-report",
    reportName: "Playwright BDD Report",
    pageTitle: "Playwright BDD Report",
    displayDuration: true,

    metadata: {
        browser: {
            name: "Chromium",
            version: "Latest"
        },
        device: "Local Machine",
        platform: {
            name: "Windows",
            version: "11"
        }
    },

    customData: {
        title: "Execution Info",
        data: [
            { label: "Project", value: "Playwright BDD" },
            { label: "Tester", value: "Sowndariya" },
            { label: "Environment", value: "QA" }
        ]
    }
});