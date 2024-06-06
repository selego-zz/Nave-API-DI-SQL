module.exports = (err, req, res, next) => {
  const httpStatus = err.status || 500; // si tiene valor, toma err.status, sino 500

  return res.status(httpStatus).send({
    status: httpStatus,
    message: err.message || "Interrnal server error"
  });
}
