const { nanoid } = require("nanoid");
const books = require("./books");
// getallBook
const getAllBooks = (request, result) => {
  const { name, reading, finished } = request.query;

  let filteredBooks = books;

  if (name !== undefined) {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (reading !== undefined) {
    filteredBooks = filteredBooks.filter(
      (book) => book.reading === !!Number(reading)
    );
  }

  if (finished !== undefined) {
    filteredBooks = filteredBooks.filter(
      (book) => book.finished === !!Number(finished)
    );
  }

  const response = result.response({
    status: "success",
    data: {
      books: filteredBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);

  return response;
};

const getBookById = (request, result) => {
  const { id } = request.params;
  const book = books.filter((b) => b.id === id)[0];

  if (book !== undefined) {
    return {
      status: "success",
      data: {
        book,
      },
    };
  }

  const response = result.response({
    status: "fail",
    message: "Buku tidak ditemukan",
  });
  response.code(404);

  return response;
};

module.exports = {
  getAllBooks,
  getBookById,
};
