const Cabecera = require("./cabecera.model");
const Lineas = require("./lineas.model");
const { MYSQL_URI } = require("../config");
const Sequelize = require('sequelize');
const sequelize = new Sequelize(MYSQL_URI); // Crea una instancia de Sequelize con la cadena de conexión a MySQL

// Definición de la relación en Cabecera
Cabecera.hasMany(Lineas, {
  foreignKey: {
    name: 'l_numero', // Nombre de la clave foránea en la tabla de líneas
    allowNull: false,
  },
  sourceKey: 'c_numero', // Cambia targetKey a sourceKey
  onDelete: 'CASCADE',
});

// Definición de la relación inversa en Lineas
Lineas.belongsTo(Cabecera, {
  foreignKey: {
    name: 'l_numero', // Nombre de la clave foránea en la tabla de líneas
    allowNull: false,
  },
  targetKey: 'c_numero',
});
(async () => {
  try {
    await sequelize.sync();
    console.log('Modelo sincronizado correctamente con la base de datos.');
    // Inicia tu aplicación o realiza otras operaciones necesarias
  } catch (error) {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  }
})();
module.exports = {
  Cabecera,
  Lineas,
  Pedido: require("./pedido.model")
}