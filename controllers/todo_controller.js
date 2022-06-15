const TodoModel = require('../models/model_todo');

const getTodoPage = async(req, res) => {
    let dataTodo = await TodoModel.listTodo();
    res.render('todo-page', { dataTodo : dataTodo });
}

const deleteTodo = async(req, res) => {
    let id = req.params.idTodo;
    const dataTodo = await TodoModel.deleteTodo(id);
    res.redirect('/todo');
}

const addTodo = async(req, res) => {
    let todo = req.body.item;
    if(todo == "") {
        res.redirect('/todo');
    }
    else{
        const dataTodo = await TodoModel.addTodo(todo);
        res.redirect('/todo');
    }
}

module.exports = {
    getTodoPage,
    deleteTodo,
    addTodo
};