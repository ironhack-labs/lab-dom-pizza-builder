module.exports = {
  launch: {
    headless: true,
    product: 'chrome',
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-sandbox',
      '--no-zygote',
      '--single-process'
    ]
  },
  server: {
    command: 'serve . -l 4444',
    port: 4444
  }
};
