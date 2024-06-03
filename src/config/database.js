if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  production: {
    username: 'usuario_de_produccion',
    password: 'contraseña_de_produccion',
    database: 'base_de_datos_de_produccion',
    host: 'servidor_de_produccion', // Cambia esto según tu configuración
    dialect: 'mysql', // Puede ser 'mysql', 'postgres', 'sqlite', etc.
  },
};

module.exports = config;