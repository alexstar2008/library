const { pagination } = require('config');
const {
  author: Author,
  book: Book,
  author_book: AuthorBook,
} = require('../libs/sequelize');

async function getBooks(ctx) {
  const {
    offset = 0,
    amount = pagination.booksAmount,
    type
  } = ctx.query;
  const { id: userId } = ctx.state.user;

  const whereQuery = {};
  if (type === 'available') {
    whereQuery.user_id = null;
  }
  if (type === 'own') {
    whereQuery.user_id = userId;
  }

  const books = await Book.findAll({
    offset,
    limit: amount,
    order: [['created_at', 'DESC']],
    where: whereQuery,
    include: {
      model: Author,
      attributes: ['id', 'first_name', 'last_name', 'birthday'],
      through: { attributes: [] }
    }
  });

  ctx.body = {
    books,
    success: true,
    message: 'Books were sent successfully'
  };
}
async function createBook(ctx) {
  const { authors, ...bookBody } = ctx.request.body;

  const book = await Book.create(bookBody);
  await AuthorBook.bulkCreate(authors.map(author_id =>
    ({ author_id, book_id: book.id })));

  ctx.body = {
    bookId: book.id,
    success: true,
    message: 'Book was created successfully'
  };
}
async function takeBook(ctx) {
  const { id: bookId } = ctx.params;
  const { id: userId, booksAmount } = ctx.state.user;

  if (booksAmount > 5) {
    ctx.throw(403, `User can take only five books from the library. You have taken ${booksAmount} books.`);
  }
  const book = await Book.findByPk(bookId);
  if (!book) {
    ctx.throw(404, 'Book not found');
  }
  if (book.user_id) {
    ctx.throw(400, 'Book is not available');
  }

  await Book.update({ user_id: userId }, {
    where: { id: bookId }
  });

  ctx.body = {
    bookId,
    success: true,
    message: 'Book was taken successfully'
  };
}
async function returnBook(ctx) {
  const { id: bookId } = ctx.params;
  const { id: userId } = ctx.state.user;

  const book = await Book.findByPk(bookId);
  if (!book) {
    ctx.throw(404, 'Book not found');
  }
  if (!book.user_id) {
    ctx.throw(403, 'Book is in the library');
  }
  if (book.user_id !== userId) {
    ctx.throw(403, 'It isn\'t your book');
  }

  await book.update({ user_id: null }, {
    where: { id: bookId, user_id: userId }
  });

  ctx.body = {
    bookId,
    success: true,
    message: 'Book was returned successfully'
  };
}
async function updateBook(ctx) {
  const { id: bookId } = ctx.params;
  const { authors, ...bookBody } = ctx.request.body;

  const updRows = await Promise.all([
    Book.update(bookBody, {
      where: { id: bookId }
    }),
    AuthorBook.destroy({
      where: {
        book_id: bookId
      }
    })
  ]);
  if (!updRows[0]) {
    ctx.throw(404, 'Book not found');
  }
  await AuthorBook.bulkCreate(authors.map(author_id =>
    ({ author_id, book_id: bookId })));

  ctx.body = {
    bookId,
    success: true,
    message: 'Book was updated successfully'
  };
}
async function removeBook(ctx) {
  const { id: bookId } = ctx.params;

  const book = await Book.findByPk(bookId);
  if (!book) {
    ctx.throw(404, 'Book not found');
  }
  await book.destroy();

  ctx.body = {
    bookId,
    success: true,
    message: 'Book was removed successfully'
  };
}

module.exports = {
  getBooks,
  createBook,
  updateBook,
  removeBook,
  takeBook,
  returnBook
};
