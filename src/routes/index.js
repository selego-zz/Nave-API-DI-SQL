const express = require("express");

module.exports = function ({
  PruebaRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes
    .use(express.json());

  apiRoutes.use("/home", PruebaRoutes);

  return router;
};