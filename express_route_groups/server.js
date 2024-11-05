import express from 'express'
import authorRouter from './routes/authorRouter.js'
import booksRouter from './routes/bookRouter.js'
import indexRouter from './routes/indexRouter.js'

const app = express()

app.use('/authors', authorRouter)
app.use('/books', booksRouter)
app.use('/', indexRouter)

const port = process.env.PORT || 3000

app.listen(port, () => console.log("Express listening on port " + port))
