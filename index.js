const { Client } = require('whatsapp-web.js')
const qr = require('qrcode-terminal')
const express = require('express')

const client = new Client()

client.on('qr', (qrcode) => {
  console.log('QR RECEIVED')
  qr.generate(qrcode, { small: true });
})

client.on('ready', () => {
  console.log('Client is ready!')
})

client.on('message', (msg) => {
  console.log(msg)
})

client.initialize()

const app = express()
app.use(express.json())

app.get('/message', async (req, res) => {
  try {
    const { to, message } = req.query
    console.log(to)
    const msg = await client.sendMessage(`${to}@c.us`, message)
    return res.json(msg)
  } catch (err) {
    return res.status(500).send(err.message)
  }

})

app.listen(3000, console.log('ZipZop API running on http://localhost:3000'))

