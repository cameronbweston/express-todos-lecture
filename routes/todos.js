import { Router } from 'express'
const router = Router()
import * as todoDb from '../data/todo-db.js'

router.get('/', function(req, res) {
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos: todos,
      error: error
    })
  })
})


export {
  router
}
