const { pagination } = require('config');
const {
  author: Author
} = require('../libs/sequelize');

async function getAuthors(ctx) {
  const {
    offset = 0,
    amount = pagination.booksAmount
  } = ctx.query;

  const books = await Author.findAll({
    offset,
    limit: amount,
    order: [['created_at', 'DESC']],
    where: { offset, limit: amount }
  });

  ctx.body = {
    books,
    success: true,
    message: 'Authors were sent successfully'
  };
}
async function createAuthor(ctx) {
  const authorBody = ctx.request.body;

  const author = await Author.create(authorBody);

  ctx.body = {
    authorId: author.id,
    success: true,
    message: 'Author was created successfully'
  };
}
async function updateAuthor(ctx) {
  const { id: authorId } = ctx.params;
  const authorBody = ctx.request.body;

  const updRows = await Author.update(authorBody, {
    where: { id: authorId }
  });
  if (!updRows[0]) {
    ctx.throw(404, 'Author not found');
  }

  ctx.body = {
    authorId,
    success: true,
    message: 'Author was updated successfully'
  };
}
async function removeAuthor(ctx) {
  const { id: authorId } = ctx.params;

  const author = await Author.findByPk(authorId);
  if (!author) {
    ctx.throw(404, 'Author not found');
  }
  await author.destroy();

  ctx.body = {
    authorId,
    success: true,
    message: 'Author was removed successfully'
  };
}

module.exports = {
  getAuthors,
  createAuthor,
  updateAuthor,
  removeAuthor
};
