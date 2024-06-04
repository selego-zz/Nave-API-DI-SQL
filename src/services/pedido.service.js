const BaseService = require("./base.service");
let _pedidoRepository = null;

class PedidoService extends BaseService {
    constructor({ PedidoRepository }) {
        super(PedidoRepository);
        this._pedidoRepository = PedidoRepository;
    }
    async createPedidos(pedidosData) {
        return sequelize.transaction(async (t) => {
            const pedidos = await Promise.all(
                pedidosData.map(async (pedidoData) => {
                    return await this.createPedido(pedidoData, { transaction: t });
                })
            );
            return pedidos;
        });
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