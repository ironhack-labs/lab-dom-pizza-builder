module.exports = {
  preset: 'jest-puppeteer',
  testEnvironment: 'jest-environment-puppeteer',
  server: {
    command: 'serve . -l 4444',
    port: 4444
  },
};
