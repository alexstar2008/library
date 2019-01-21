
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.name === 'SequelizeUniqueConstraintError' ? 400 : e.status || 500;
    let message = e.message;
    if (e.details) {
      message = e.details[0].message;
    }
    else if (e.errors && e.errors.length) {
      message = e.errors.map(err => err.message).join(' ');
    }

    ctx.body = {
      success: false,
      message
    };
  }
};
