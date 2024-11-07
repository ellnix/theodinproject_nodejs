import { Router } from 'express'
import usersController from './usersController'

const usersRouter = Router()

usersRouter.get('/', usersController.index)
usersRouter.get('/create', usersController.new)
usersRouter.post('/', usersController.create)

export default usersRouter
