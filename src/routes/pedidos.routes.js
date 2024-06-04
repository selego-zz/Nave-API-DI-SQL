const { Router } = require("express");
const {
    AuthMiddleware,
    ParseIntMiddleware,
    CacheMiddleware
} = require("../middleware");
const { CACHE_TIME } = require("../helpers");

module.exports = function ({ PedidoController }) {
    const router = Router();

    //    const middlewaresSinCache = [AuthMiddleware, ParseIntMiddleware];
    const middlewaresSinCache = [ParseIntMiddleware];
    const middlewaresConCache = [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)];

    router.post("/pedidos", middlewaresSinCache, PedidoController.createPedidos);

    /* por revisar */
    router.post("/cabecera", middlewaresSinCache, PedidoController.createCabecera);
    router.post("/linea", middlewaresSinCache, PedidoController.createLinea);
    router.delete("", middlewaresSinCache, PedidoController.deleteAll);//será numero
    router.delete("/:pedidoId", middlewaresSinCache, PedidoController.delete);//será numero
    router.patch("/:pedidoId", middlewaresSinCache, PedidoController.update);
    router.get("", middlewaresSinCache, PedidoController.getAll);
    router.get("/listos", middlewaresSinCache, PedidoController.getListos);
    router.get("/:pedidoId", middlewaresSinCache, PedidoController.get);

    /* viejos
    router.post("", middlewaresSinCache, PedidoController.create);
    router.delete("/:pedidoId", middlewaresSinCache, PedidoController.delete);
    router.patch("/:pedidoId", middlewaresSinCache, PedidoController.update);

    router.get("", middlewaresSinCache, PedidoController.getAll);
    router.get("/:pedidoId", middlewaresSinCache, PedidoController.get);
    router.get("/:agentId/p-agente", middlewaresSinCache, PedidoController.getAgentPedidos);
    router.get("/:clienteId/p-cliente`", middlewaresSinCache, PedidoController.getClientPedidos);

    router.get("/cc", middlewaresConCache, PedidoController.getAll);
    router.get("/cc/:pedidoId", middlewaresConCache, PedidoController.get);
    router.get("/cc/:agentId/p-agente", middlewaresConCache, PedidoController.getAgentPedidos);
    router.get("/cc/:clienteId/p-cliente`", middlewaresConCache, PedidoController.getClientPedidos);
*/
    return router;
}