const Cabecera = require("./cabecera.model");
const Lineas = require("./lineas.model");

const pedido = {
  p_Cabecera: Cabecera,
  p_Lineas: [Lineas]
};

module.exports = pedido;