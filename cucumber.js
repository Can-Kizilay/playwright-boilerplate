const config = {
  require: ['src/step-definitions/**/*.ts'],
  requireModule: ['ts-node/register'],
  format: [

    'json:reports/cucumber-report.json',
    'html:reports/report.html',
    'summary',
    'progress-bar',
    './src/reporters/allure-reporter.js',
  ],
  formatOptions: { snippetInterface: 'async-await' },
  parallel: 4
};
module.exports = {
  default: config
}