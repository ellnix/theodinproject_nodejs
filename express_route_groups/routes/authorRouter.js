import { Router } from 'express'

const authorRouter = Router()

authorRouter.get('/', (req, res) => res.send("All authors"))

authorRouter.get('/:author_id/', (req, res) => res.send("Author ID: " + req.params.author_id))


export default authorRouter

