var express = require('express');
var router = express.Router();
const playerController = require('../controllers/player_controller');

router.get('/', playerController.getPlayerPage);
router.get('/add', playerController.getAddPlayerPage);
router.post('/add', playerController.addPlayer);
router.get('/delete/:idPlayer', playerController.deletePlayer);
router.get('/edit/:idPlayer', playerController.getEditPlayerPage);
router.post('/edit/:idPlayer', playerController.editPlayer);
router.get('/detail/:idPlayer', playerController.getPlayerDetails);

module.exports = router;
