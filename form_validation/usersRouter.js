import { Router } from 'express'
import usersController from './usersController'

const usersRouter = Router()

usersRouter.get('/', usersController.index)
usersRouter.get('/create', usersController.new)
usersRouter.post('/', usersController.create)
usersRouter.get('/:id/edit', usersController.edit)
usersRouter.post('/:id', usersController.update)
usersRouter.post('/:id/delete', usersController.delete)

export default usersRouter
