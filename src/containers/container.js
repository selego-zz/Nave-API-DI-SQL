const {
  createContainer,
  asClass,
  asFunction,
  asValue
} = require("awilix");

// config
const config = require("../config");
const app = require(".");

// routes
const {
  PruebaRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");

// controllers
const {
  PruebaController,
} = require("../controllers");

// services
const {
  PruebaServicio,
} = require("../services");

// repositories
const {

} = require("../repositories");

// models
const {
  Cabecera,
  Lineas
} = require("../models");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(PruebaRoutes).singleton(),
    config: asValue(config)
  }).register({ // rutas
    PruebaRoutes: asFunction(PruebaRoutes).singleton(),
  }).register({ // controladores
    PruebaController: asClass(PruebaController.bind(PruebaController)).singleton(),
  }).register({ // servicios
    PruebaServicio: asClass(PruebaServicio).singleton(),
  })
  .register({ // repositorio
    //    PedidoRepository: asClass(PedidoRepository).singleton(),
  }).register({ // modelos
    Cabecera: asValue(Cabecera),
    Lineas: asValue(Lineas)
  });

module.exports = container;