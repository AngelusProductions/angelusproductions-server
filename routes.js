const express = require('express');

const router = express.Router();

const contactController = requiure('./controllers/contactController');

router.post('/contact', contactController.sendContactForm);

module.exports = router;