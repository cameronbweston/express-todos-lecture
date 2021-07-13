import * as todoDb from '../data/todo-db.js'


export {
  index
}

function index(req, res) {
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos,
      error
    })
  })
}