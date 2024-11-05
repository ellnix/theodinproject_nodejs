import { Router } from 'express'

const indexRouter = Router()

indexRouter.get('/', (req, res) => res.sendStatus(200))
indexRouter.get('/about', (req, res) => res.send("We are very special"))
indexRouter.get('/contact', (req, res) => res.send("Do not answer."))
indexRouter.post('/contact', (req, res) => res.send("You chose to answer, very well..."))

export default indexRouter
