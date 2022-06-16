const db = require('../models/database');

exports.listPlayer = async() => {
    return new Promise((resolve,reject) => {
        let sql = `SELECT * FROM player`;
        let query = db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.addPlayer = async(name, email, todo, phonenumber, address, detail) => {
    return new Promise((resolve,reject) => {
        let data = {
            namePlayer : name,
            email : email,
            position : todo,
            phonenumber : phonenumber,
            address : address,
            detail : detail
        }
        let sql = `INSERT INTO player SET ?`;
        let query = db.query(sql, data, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.deletePlayer = async(id) => {
    return new Promise((resolve,reject) => {
        let sql = `DELETE FROM player WHERE idPlayer = ${id}`;
        let query = db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.getPlayerById = async(id) => {
    return new Promise((resolve,reject) => {
        let sql = `SELECT * FROM player WHERE idPlayer = ${id}`;
        let query = db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        }
        );
    });
}

exports.editPlayer = async(id, name, email, todo, phonenumber, address, detail) => {
    return new Promise((resolve,reject) => {
        let data = {
            namePlayer : name,
            email : email,
            position : todo,
            phonenumber : phonenumber,
            address : address,
            detail : detail
        }
        let sql = `UPDATE player SET ? WHERE idPlayer = ${id}`;
        let query = db.query(sql, data, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        }
        );
    });
}