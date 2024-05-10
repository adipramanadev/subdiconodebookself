const { nanoid } = require('nanoid')
const bookself = require('./books')
//getallBook
const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query
  
    if (name) {
      const lowName = name.toLowerCase()
  
      const response = h.response({
        status: 'success',
        data: {
          books: bookselft
            .filter((n) => n.name === lowName)
            .map((books) => ({
              id: books.id,
              name: books.name,
              publisher: books.publisher
            }))
        }
      })
      response.code(200)
      return response
    }
  
    if (reading === '1') {
      const response = h.response({
        status: 'success',
        data: {
          books: bookselft
            .filter((r) => r.reading === true)
            .map((books) => ({
              id: books.id,
              name: books.name,
              publisher: books.publisher
            }))
        }
      })
      response.code(200)
      return response
    }
  
    if (reading === '0') {
      const response = h.response({
        status: 'success',
        data: {
          books: bookselft
            .filter((r) => r.reading === false)
            .map((books) => ({
              id: books.id,
              name: books.name,
              publisher: books.publisher
            }))
        }
      })
      response.code(200)
      return response
    }
  
    if (finished === '1') {
      const response = h.response({
        status: 'success',
        data: {
          books: bookselft
            .filter((f) => f.finished === true)
            .map((books) => ({
              id: books.id,
              name: books.name,
              publisher: books.publisher
            }))
        }
      })
      response.code(200)
      return response
    }
  
    if (finished === '0') {
      const response = h.response({
        status: 'success',
        data: {
          books: bookselft
            .filter((f) => f.finished === false)
            .map((books) => ({
              id: books.id,
              name: books.name,
              publisher: books.publisher
            }))
        }
      })
      response.code(200)
      return response
    }
  
    const response = h.response({
      status: 'success',
      data: {
        books: bookselft.map((m) => ({
          id: m.id,
          name: m.name,
          publisher: m.publisher
        }))
      }
    })
    response.code(200)
    return response
  }