import { Router } from 'express'

const booksRouter = Router()
const reservations = []

booksRouter.get('/', (req, res) => res.send("All books!"))
booksRouter.get('/:book_id/', (req, res) => res.send("Book ID :" + req.params.book_id))

booksRouter.get('/:book_id/reserve', (req, res) => {
  const { book_id } = req.params

  if(reservations.includes(book_id)) {
    res.send(`Book with id ${book_id} is reserved.`)
  } else {
    res.send(`Book with id ${book_id} is not reserved.`)
  }
})

booksRouter.post('/:book_id/reserve', (req, res) => {
  const { book_id } = req.params

  if (reservations.includes(book_id)) {
    res.send(`Book with id ${book_id} is already reserved.`)
  } else {
    reservations.push(book_id)
    res.send("Reserved book with id " + book_id)
  }
})

export default booksRouter
