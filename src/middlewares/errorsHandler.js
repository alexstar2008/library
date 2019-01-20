
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    if (e.name === 'ValidationError') {
      ctx.status = 400;
      const message = e.details ? e.details[0].message : 
        e.errors.map(errKey => e.errors[errKey].message);
      ctx.body = {
        success: false,
        message,
        object: null
      };
      return;
    } 
    ctx.status = e.name === 'SequelizeUniqueConstraintError' ? 400 : e.status || 500;
    ctx.body = {
      success: false,
      message: e.message,
      object: null
    };
  }
};
