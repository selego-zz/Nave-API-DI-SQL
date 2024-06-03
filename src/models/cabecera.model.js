const { DataTypes } = require('sequelize');
const { MYSQL_URI } = require("../config");
const Sequelize = require('sequelize');
const sequelize = new Sequelize(MYSQL_URI); // Crea una instancia de Sequelize con la cadena de conexión a MySQL

const cabecera = sequelize.define('cabeceras', {
    c_MarcadoParaTransporte: { type: DataTypes.BOOLEAN, default: false },
    c_tipo: { type: DataTypes.STRING, required: true, primaryKey: true },
    c_serie: { type: DataTypes.STRING, required: true, primaryKey: true },
    c_numero: { type: DataTypes.INTEGER, required: true, primaryKey: true },

    c_fecha: { type: DataTypes.DATE, default: DataTypes.DATE.now },
    c_fechaEntrega: { type: DataTypes.DATE, default: DataTypes.DATE.now },
    c_suNumero: { type: DataTypes.STRING, required: false },
    c_almacen: { type: DataTypes.STRING, required: false },
    c_bultos: { type: DataTypes.SMALLINT, required: false },

    c_codCliente: { type: DataTypes.STRING, required: false },
    c_nombreFiscal: { type: DataTypes.STRING, required: false },
    c_domicilio: { type: DataTypes.STRING, required: false },
    c_codPostal: { type: DataTypes.STRING, required: false },
    c_poblacion: { type: DataTypes.STRING, required: false },
    c_cif: { type: DataTypes.STRING, required: false },
    c_pais: { type: DataTypes.STRING, required: false },
    c_codAgente: { type: DataTypes.STRING, required: false },

    c_nombreEnvio: { type: DataTypes.STRING, required: false },
    c_domicilioEnvio: { type: DataTypes.STRING, required: false },
    c_codPostalEnvio: { type: DataTypes.STRING, required: false },
    c_poblacionEnvio: { type: DataTypes.STRING, required: false },
    c_paisEnvio: { type: DataTypes.STRING, required: false },
    c_telefonoEnvio: { type: DataTypes.STRING, required: false },

    c_baseImp: { type: DataTypes.DOUBLE, required: false },
    c_tipoIVA: { type: DataTypes.STRING, required: false },
    c_iva: { type: DataTypes.STRING, required: false },
    c_impIVA: { type: DataTypes.DOUBLE, required: false },
    c_rE: { type: DataTypes.FLOAT, default: 0 },
    c_impRE: { type: DataTypes.DOUBLE, default: 0 },
    c_descuento: { type: DataTypes.FLOAT, default: 0 },
    c_impDescuento: { type: DataTypes.DOUBLE, default: 0 },

    c_total: { type: DataTypes.DOUBLE, required: false },
    c_fPago: { type: DataTypes.STRING, required: false },
    c_observaciones: { type: DataTypes.STRING, required: false },
    c_comentario1: { type: DataTypes.STRING, required: false },
    c_comentario2: { type: DataTypes.STRING, required: false },
    c_comentario3: { type: DataTypes.STRING, required: false },
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
module.exports = cabecera;