const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-error");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middleware");

module.exports = function ({
  PruebaRoutes,
  PedidosRoutes,
  /**
   * ampliar por aquí
   * 
     AuthRoutes,
     ClienteRoutes,
     UserRoutes
   **/
}) {
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

  apiRoutes.use("/home", PruebaRoutes);
  apiRoutes.use("/pedido", PedidosRoutes);

  /**
   * ampliar por aquí
   * 
    apiRoutes.use("/auth", AuthRoutes);
    apiRoutes.use("/user", UserRoutes);
    apiRoutes.use("/cliente", ClienteRoutes);
  */
  router.use("/ich", apiRoutes);

  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};