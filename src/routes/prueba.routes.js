const { Router } = require("express");

module.exports = function ({ PruebaController }) {
  const router = Router();
  router.get("/", PruebaController.index);

  return router;
};