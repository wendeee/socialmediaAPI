module.exports = (err, req, res, next) => {
  err.status = err.status || 'Error';
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
