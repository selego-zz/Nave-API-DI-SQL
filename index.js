const container = require("./src/containers/container");
const server = container.resolve("app");
const { MYSQL_URI } = container.resolve("config");

const Sequelize = require('sequelize');
const sequelize = new Sequelize(MYSQL_URI); // Crea una instancia de Sequelize con la cadena de conexión a MySQL

// Inicia el servidor después de conectar a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos MySQL establecida correctamente.');
    return server.start();
  })
  .catch("Error en index:" + console.error);

module.exports = sequelize;