const db = require('../models/database');

exports.listTodo = async() => {
    return new Promise((resolve,reject) => {
        let sql = `SELECT * FROM todo`;
        let query = db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.deleteTodo = async(id) => {
    return new Promise((resolve,reject) => {
        let sql = `DELETE FROM todo WHERE idTodo = ${id}`;
        let query = db.query(sql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

exports.addTodo = async(todo) => {
    return new Promise((resolve,reject) => {
        let sql = `INSERT INTO todo (itemTodo) VALUES ('${todo}')`;
        let query = db.query(sql, todo, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}