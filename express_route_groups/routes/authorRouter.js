import { Router } from 'express'
import { provide_author_by_id } from '../controllers/authorController'

const authorRouter = Router()

authorRouter.get('/', (req, res) => res.send("All authors"))

authorRouter.get('/:author_id', provide_author_by_id)

export default authorRouter

