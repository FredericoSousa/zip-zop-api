const client = require('../whatsapp');

const send = async (req, res) => {
  try {
    const { to, message } = req.body;
    await client.sendMessage(`${to}@c.us`, message);
    return res.json({ sent: true });
  } catch (err) {
    console.log(err);
    return res.json({ sent: false });
  }
}

module.exports = { send };