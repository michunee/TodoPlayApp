var express = require('express');
var router = express.Router();
const playerController = require('../controllers/player_controller');

router.get('/', playerController.getPlayerPage);

module.exports = router;
