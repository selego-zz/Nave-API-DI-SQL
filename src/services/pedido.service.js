const BaseService = require("./base.service");
let _pedidoRepository = null;

class PedidoService extends BaseService {
    constructor({ PedidoRepository }) {
        super(PedidoRepository);
        this._pedidoRepository = PedidoRepository;
    }
    async createPedidos(pedidosData) {
        try {
            await this._pedidoRepository.deleteAll();
            for (const pedidoData of pedidosData) {
                await this._pedidoRepository.createCabecera(pedidoData.p_Cabecera);
                for (const lineaData of pedidoData.p_Lineas) {
                    await this._pedidoRepository.createLinea(lineaData);
                }
            }
            console.log('Service - Pedidos creados correctamente.');
        } catch (error) {
            console.error('Service - Error al crear los pedidos:', error);
            throw error;
        }
    }
    /* por revisar */

    async createCabecera(entity) {
        return await this.repository.createCabecera(entity);
    }
    async createLinea(entity) {
        return await this.repository.createLinea(entity);
    }

    async getListos() {
        return await this.repository.getListos();
    }

    async getAgentPedidos(agente) {
        return await _pedidoRepository.getAgentPedidos(agente);
    }
    async getClientPedidos(cliente) {
        return await _pedidoRepository.getClientPedidos(cliente);
    }
}

module.exports = PedidoService;