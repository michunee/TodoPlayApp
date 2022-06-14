const TodoModel = require('../models/model_todo');

const getTodoPage = async(req, res) => {
    const dataTodo = await TodoModel.listTodo();
    res.render('todo-page', { dataTodo : dataTodo });
}

const deleteTodo = async(req, res) => {
    const id = req.params.idTodo;
    const dataTodo = await TodoModel.deleteTodo(id);
    res.redirect('/todo');
}


module.exports = {
    getTodoPage,
    deleteTodo
};