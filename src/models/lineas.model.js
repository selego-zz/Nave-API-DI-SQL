const { DataTypes } = require('sequelize');
const { MYSQL_URI } = require("../config");
const Sequelize = require('sequelize');
const sequelize = new Sequelize(MYSQL_URI); // Crea una instancia de Sequelize con la cadena de conexión a MySQL

const lineas = sequelize.define('lineas', {
    l_lineaCompleta: { type: DataTypes.BOOLEAN, default: false },
    l_tipo: { type: DataTypes.STRING, required: true, primaryKey: true },
    l_serie: { type: DataTypes.STRING, required: true, primaryKey: true },
    l_numero: { type: DataTypes.INTEGER, required: true, primaryKey: true },
    l_linea: { type: DataTypes.SMALLINT, required: true, primaryKey: true },

    l_producto: { type: DataTypes.STRING, required: false },
    l_descripcion: { type: DataTypes.STRING, required: false },
    l_udsPedidas: { type: DataTypes.FLOAT, required: false },
    l_udsServidas: { type: DataTypes.FLOAT, required: false },

    l_precioCosto: { type: DataTypes.DOUBLE, required: false },
    l_pvp: { type: DataTypes.DOUBLE, required: false },
    l_baseImp: { type: DataTypes.DOUBLE, required: false },
    l_descuento: { type: DataTypes.FLOAT, default: 0 },
    l_impDescuento: { type: DataTypes.DOUBLE, default: 0 },
    l_iva: { type: DataTypes.FLOAT, required: false },
    l_impIva: { type: DataTypes.DOUBLE, required: false },

    l_comision: { type: DataTypes.FLOAT, required: false },
    l_impComision: { type: DataTypes.DOUBLE, required: false },
    l_almacen: { type: DataTypes.STRING, required: false },
    l_formato: { type: DataTypes.STRING, required: false },
    l_comentarios: { type: DataTypes.STRING, required: false },
}, {
    // Opciones del modelo
    timestamps: true, // Habilita los campos createdAt y updatedAt
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
module.exports = lineas;