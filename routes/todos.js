import { Router } from 'express'
const router = Router()
import * as todosCtrl from '../controllers/todos.js'

router.get('/', todosCtrl.index)
router.get('/new', todosCtrl.new) //we have to put this line first so it gets triggered
router.get('/:id', todosCtrl.show)
router.post('/', todosCtrl.create)
router.delete('/:id', todosCtrl.delete)
export {
  router
}
