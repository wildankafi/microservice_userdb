const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const refreshTokenHendler = require('./handler/refresh_tokens');
router.post('/',refreshTokenHendler.create);
router.get('/',refreshTokenHendler.getToken);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
