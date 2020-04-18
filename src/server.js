require('dotenv').config();
const { logo } = require('./utils')
const client = require('./whatsapp');
const app = require('./app');
const ora = require('ora');

client.initialize();

const { APP_PORT: port = 3000, APP_URL: url = 'http://localhost' } = process.env;

logo();
const spinner = ora({ color: 'green', text: 'Loading Zip Zop, Please read the qrcode', discardStdin: true }).start();
client.on('ready', () => {
  spinner.stop();
  app.listen(port, console.log(`\x1b[32mZip Zop API is running on: ${url}:${port}`))
})