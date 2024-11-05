const authors = [
  { id: 1, name: 'Bryan' },
  { id: 2, name: 'Christian' },
  { id: 3, name : 'Jason' },
]

export async function get_author_by_id(author_id) {
  return authors.find(author => author.id == author_id)
}

