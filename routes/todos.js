import { Router } from 'express'
const router = Router()
import * as todosCtrl from '../controllers/todos.js'

router.get('/', todosCtrl.index)
router.get('/:id', todosCtrl.show)


export {
  router
}
