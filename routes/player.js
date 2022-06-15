var express = require('express');
var router = express.Router();
const playerController = require('../controllers/player_controller');

router.get('/', playerController.getPlayerPage);
router.get('/add', playerController.getAddPlayerPage);

module.exports = router;
