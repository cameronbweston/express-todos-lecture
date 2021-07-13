import * as todoDb from '../data/todo-db.js'


export {
  index,
  show
}

function index(req, res) {
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos,
      error
    })
  })
}

function show(req, res) {
  todoDb.findById(req.params.id, function(error, todo) {
    res.render('todos/show', {
      todo,
      error
    })
  })
}