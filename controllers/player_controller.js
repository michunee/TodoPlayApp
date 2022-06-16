const PlayerModel = require('../models/model_player');

const getPlayerPage = async(req, res) => {
    let dataPlayer = await PlayerModel.listPlayer();
    res.render('player-page',{dataPlayer : dataPlayer});
}

const getAddPlayerPage = async(req, res) => {
    res.render('add-player-page');
}

const addPlayer = async(req, res) => {
    let {name, email, todo, phonenumber, address, detail} = req.body;
    if(name == "" || email == "" || todo == "" || phonenumber == "" || address == "" || detail == "") {
        res.redirect('/player/add');
    } else{
        let dataPlayer = await PlayerModel.addPlayer(name, email, todo, phonenumber, address, detail);
        res.redirect('/player');
    }
}

const deletePlayer = async(req, res) => {
    let id = req.params.idPlayer;
    let dataPlayer = await PlayerModel.deletePlayer(id);
    res.redirect('/player');
}

const getEditPlayerPage = async(req, res) => {
    let id = req.params.idPlayer;
    let dataPlayer = await PlayerModel.getPlayerById(id);
    res.render('edit-player-page',{dataPlayer : dataPlayer});
}

module.exports = {
    getPlayerPage,
    getAddPlayerPage,
    addPlayer,
    deletePlayer,
    getEditPlayerPage
}