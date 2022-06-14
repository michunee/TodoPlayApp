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