const PlayerModel = require('../models/model_player');

const getPlayerPage = async(req, res) => {
    let dataPlayer = await PlayerModel.listPlayer();
    res.render('player-page',{dataPlayer : dataPlayer});
}

const getAddPlayerPage = async(req, res) => {
    res.render('add-player-page');
}

module.exports = {
    getPlayerPage,
    getAddPlayerPage
}