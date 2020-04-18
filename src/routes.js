const { Router } = require('express');
const { send } = require('./controllers/MessageController')

const router = Router();

router.post('/messages', send)

module.exports = router;