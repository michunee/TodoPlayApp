var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todo_controller');

router.get('/', todoController.getTodoPage);
router.get('/delete/:idTodo', todoController.deleteTodo);

module.exports = router;
