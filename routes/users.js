const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const usersHendler = require('./handler/users');

router.post('/register',usersHendler.register);
router.post('/login',usersHendler.login);
router.put('/:id', usersHendler.update);
router.get('/:id',usersHendler.getUser);
router.get('/',usersHendler.getUsers);
router.post('/logout',usersHendler.logout);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
