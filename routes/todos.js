import { Router } from 'express'
import * as todoDb from '../data/todo-db.js'
const router = Router()

/* GET users listing. */
router.get('/', (req, res) => {
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos,
      error
    })
  })
})

export {
  router
}
