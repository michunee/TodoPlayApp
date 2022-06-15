const PlayerModel = require('../models/model_player');

const getPlayerPage = async(req, res) => {
    res.render('player-page');
}

module.exports = {
    getPlayerPage
}