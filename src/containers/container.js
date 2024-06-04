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
  PedidosRoutes,
  /**
 * ampliar por aquí
 * 
AuthRoutes,
UserRoutes,
*/
} = require("../routes/index.routes");
const Routes = require("../routes");

// controllers
const {
  PruebaController,
  PedidoController,
  /**
 * ampliar por aquí
 * 
AuthController,
ClienteController,
UserController
*/
} = require("../controllers");

// services
const {
  PruebaServicio,
  PedidoService,

  /**
   * ampliar por aquí
   * 
  AuthService,
  ClienteService,
  UserService
  */
} = require("../services");

// repositories
const {
  PedidoRepository,
  /**
 * ampliar por aquí
 * 
UserRepository,
ClienteRepository
*/
} = require("../repositories");

// models
const {
  Pedido,
  Cabecera,
  Lineas,
  /**
 * ampliar por aquí
 * 
Cliente,
User
*/
} = require("../models");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  }).register({ // rutas
    PruebaRoutes: asFunction(PruebaRoutes).singleton(),
    PedidosRoutes: asFunction(PedidosRoutes).singleton(),

    /**
  * ampliar por aquí
  * 
  AuthRoutes: asFunction(AuthRoutes).singleton(),
   ClienteRoutes: asFunction(ClienteRoutes).singleton(),
   UserRoutes: asFunction(UserRoutes).singleton(),
 */
  }).register({ // controladores
    PruebaController: asClass(PruebaController.bind(PruebaController)).singleton(),
    PedidoController: asClass(PedidoController.bind(PedidoController)).singleton(),

    /**
  * ampliar por aquí
  * 
  AuthController: asClass(AuthController.bind(AuthController)).singleton(),
   ClienteController: asClass(ClienteController.bind(ClienteController)).singleton(),
   UserController: asClass(UserController.bind(UserController)).singleton(),
  */
  }).register({ // servicios
    PruebaServicio: asClass(PruebaServicio).singleton(),
    PedidoService: asClass(PedidoService).singleton(),

    /**
  * ampliar por aquí
  * 
  AuthService: asClass(AuthService).singleton(),
   ClienteService: asClass(ClienteService).singleton(),
   UserService: asClass(UserService).singleton(),
 */
  }).register({ // repositorio
    PedidoRepository: asClass(PedidoRepository).singleton(),

    /**
   * ampliar por aquí
   * 
    UserRepository: asClass(UserRepository).singleton(),
    ClienteRepository: asClass(ClienteRepository).singleton()
  */
  }).register({ // modelos
    Pedido: asValue(Pedido),
    Cabecera: asValue(Cabecera),
    Lineas: asValue(Lineas),

    /**
   * ampliar por aquí
   * 
    Cliente: asValue(Cliente),
    User: asValue(User),
  */
  });

module.exports = container;