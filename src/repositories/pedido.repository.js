const { Cabecera, Lineas } = require('../models');
const { MYSQL_URI } = require("../config");
const Sequelize = require('sequelize');
const lineas = require('../models/lineas.model');
const sequelize = new Sequelize(MYSQL_URI); // Crea una instancia de Sequelize con la cadena de conexión a MySQL

class PedidoRepository {

    async deleteAll() {
        const tL = await sequelize.transaction();
        try {
            await Lineas.destroy({
                where: {}, // Sin condiciones, eliminará todos los registros
                truncate: true // Esto reiniciará los contadores de ID si es necesario
            }, { transaction: tL });
            // Confirma la transacción
            await tL.commit();

            console.log('Lineas eliminadas correctamente.');
        } catch (error) {
            // Si hay un error, deshace la transacción
            await tL.rollback();
            console.error('Error al eliminar registros:', error);
            throw error;
        }

        const tC = await sequelize.transaction();
        try {
            await Cabecera.destroy({
                where: {}, // Sin condiciones, eliminará todos los registros
                truncate: true // Esto reiniciará los contadores de ID si es necesario
            }, { transaction: tC });
            // Confirma la transacción
            await tC.commit();

            console.log('Cabeceras eliminadas correctamente.');
        } catch (error) {
            // Si hay un error, deshace la transacción
            await tC.rollback();
            console.error('Error al eliminar registros:', error);
            throw error;
        }
        return true;
    }

    async createCabecera(pedidoData) {
        //const { Cabecera: CabeceraData } = pedidoData;
        //        console.log('PedidoRepository.createCabecera');
        //        console.log('----> PedidoRepository.createCabecera, pedidoData ' + pedidoData);
        //        console.log(JSON.stringify(pedidoData, null, 2));


        // Inicia una transacción
        const t = await sequelize.transaction();

        try {
            // Crea la Cabecera
            const nuevaCabecera = await Cabecera.create(pedidoData, { transaction: t });
            // Confirma la transacción
            await t.commit();

            console.log('Cabecera creada correctamente.');
        } catch (error) {
            // Si hay un error, deshace la transacción
            await t.rollback();
            console.error('Error al crear el pedido:', error);
            console.log('PedidoRepository.GetAll, error ' + error);
            throw error;
        }
    }
    async createLinea(pedidoData) {
        const { Lineas: LineasData } = pedidoData;
        //        console.log('PedidoRepository.createLinea');
        //        console.log('----> PedidoRepository.createLinea, pedidoData ' + pedidoData);
        //        console.log(JSON.stringify(pedidoData, null, 2));

        // Inicia una transacción
        const t = await sequelize.transaction();

        try {
            // Crea la lineaa
            const nuevaLinea = await Lineas.create(pedidoData, { transaction: t });

            // Confirma la transacción
            await t.commit();

            console.log('Repository - Pedido creado correctamente.');
        } catch (error) {
            // Si hay un error, deshace la transacción
            await t.rollback();
            console.error('Repository - Error al crear el pedido:', error);
            throw error;
        }
    }
    async getAll(pageSize = 100, pageNum = 1) {

        try {
            const offset = (pageNum - 1) * pageSize;

            const pedidos = await Cabecera.findAll({
                include: [
                    {
                        model: Lineas,
                    },
                ],
                offset,
                limit: pageSize,
            });

            return pedidos;
        } catch (error) {
            console.error('Error al obtener los pedidos:', error);
            console.log('PedidoRepository.GetAll, error ' + error);

            throw error;
        }
    }

    /* por revisar */

    async get(id) {
        return await _pedido.findById(id);
    }
    async getListos(pageSize = 100, pageNum = 1) {
        console.log('PedidoRepository.GetListos, _pedido ' + this._pedido);

        try {
            const offset = (pageNum - 1) * pageSize;

            const pedidos = await Cabecera.findAll({
                include: [
                    {
                        model: Lineas,
                        where: {
                            l_lineaCompleta: true,
                        },
                    },
                ],
                offset,
                limit: pageSize,
            });

            return pedidos;
        } catch (error) {
            console.error('Error al obtener los pedidos:', error);
            throw error;
        }
    }
    async update(id, entity) {
        return await _pedido.findByIdAndUpdate(id, entity, { new: true });
        //el ultimo parámetro es para que mongoose retorne la entidad actualizada
    }
    async delete(id) {
        await _pedido.findByIdAndDelete(id);
        return true;
    }

    async getAgentPedidos(agente) {
        return await _pedido.find({ agente });
    }
    async getClientPedidos(cliente) {
        return await _pedido.find({ cliente });
    }

}

module.exports = PedidoRepository;