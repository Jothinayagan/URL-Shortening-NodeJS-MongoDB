const router = require('express').Router();

const shortUrlController = require('./controllers/shortUrl');

router.post('/shortUrl', shortUrlController.shortUrl);

module.exports = router;