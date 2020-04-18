const { Client } = require('whatsapp-web.js')
const qr = require('qrcode-terminal')

const client = new Client()

client.on('qr', (qrcode) => {
  console.log('\n');
  qr.generate(qrcode, { small: true });
})

client.on('message', (msg) => {
  console.log(msg)
})

module.exports = client;