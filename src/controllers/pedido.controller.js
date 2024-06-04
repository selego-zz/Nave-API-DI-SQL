let _pedidoService = null;
class PedidoController {
  constructor({ PedidoService }) {
    _pedidoService = PedidoService;
  }

  async createPedidos(req, res) {
    try {
      const { body } = req;

      const createdPedidos = await _pedidoService.createPedidos(body);

      return res.status(201).send(createdPedidos);
    } catch (error) {
      console.error('Error al crear los pedidos:', error);
      return res.status(500).send({ error: 'Error al crear los pedidos' });
    }
  }

  /* por revisar */
  async get(req, res) {
    const { pedidoId } = req.params; //myapi.com/pedido/65461513620 <- lo que hay tras la ultoma /
    const pedido = await _pedidoService.get(pedidoId);
    return res.send(pedido);
  }
  async getAll(req, res) {
    console.log('PedidoController.GetAll');
    const { pageSize, pageNum } = req.query;
    const pedidos = await _pedidoService.getAll(pageSize, pageNum);
    return res.send(pedidos);
  }
  async getListos(req, res) {
    const pedidos = await _pedidoService.getListos();
    return res.send(pedidos);
  }
  async update(req, res) {
    const { body } = req; //myapi.com/pedido/65461513620 <- lo que hay tras la ultoma /
    const { pedidoId } = req.params; //myapi.com/pedido/65461513620 <- lo que hay tras la ultoma /
    const updatedPedido = await _pedidoService.update(pedidoId, body);
    return res.send(updatedPedido);
  }
  async createCabecera(req, res) {
    const { body } = req; //myapi.com/idea/65461513620 <- lo que hay tras la ultoma /
    const createdPedido = await _pedidoService.createCabecera(body);
    return res.status(201).send(createdPedido);
  }
  async createLinea(req, res) {
    const { body } = req; //myapi.com/idea/65461513620 <- lo que hay tras la ultoma /
    const createdPedido = await _pedidoService.createLinea(body);
    return res.status(201).send(createdPedido);
  }
  async delete(req, res) {
    const { pedidoId } = req.params; //myapi.com/pedido/65461513620 <- lo que hay tras la ultoma /
    const deletedPedido = await _pedidoService.delete(pedidoId);
    return res.send(deletedPedido);
  }
  async deleteAll(req, res) {
    const deletedPedido = await _pedidoService.deleteAll();
    return res.send(deletedPedido);
  }
  async getAgentPedidos(req, res) {
    const { agentId } = req.params; //myapi.com/idea/65461513620 <- lo que hay tras la ultoma /
    const agentPedidos = await _pedidoService.getAgentPedidos(agentId);
    return res.send(agentPedidos);
  }
  async getClientPedidos(req, res) {
    const { clientId } = req.params; //myapi.com/idea/65461513620 <- lo que hay tras la ultoma /
    const clientPedidos = await _pedidoService.getClientPedidos(clientId);
    return res.send(clientPedidos);
  }

}

module.exports = PedidoController;