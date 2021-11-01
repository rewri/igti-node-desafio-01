import orderService from "../services/orderService.js"

async function create(req, res, next) {
    try {
        let order = req.body;
        if (!order.cliente || !order.produto || !order.valor) {
            throw new Error('cliente, produto e valor são obrigatórios');
        }
        order = await orderService.create(order);
        res.send(order);
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    try {
        const id = req.params.id;
        let order = req.body;
        if (!order.cliente || !order.produto || !order.valor || !("entregue" in req.body)) {
            throw new Error('cliente, produto, valor e entregue são obrigatórios');
        }
        const found = await orderService.find(id);
        if (!found) {
            throw new Error('pedido não encontrado');
        }
        order.id = found.id;
        order = await orderService.update(order);
        res.send(order);
    } catch (error) {
        next(error);
    }
}

async function updateStatus(req, res, next) {
    try {
        let order = req.body;
        if (!order.id || !("entregue" in req.body)) {
            throw new Error('id e entregue são obrigatórios');
        }
        if (order.entregue !== false && order.entregue !== true) {
            throw new Error('entregue deve ser true ou false');
        }
        order = await orderService.updateStatus(order);
        res.send(order);
    } catch (error) {
        next(error);
    }
}

async function remove(req, res, next) {
    try {
        const id = req.params.id;
        if (!id) {
            throw new Error('id obrigatório');
        }
        const order = await orderService.remove(id);
        res.send(order);
    } catch (error) {
        next(error);
    }
}

async function view(req, res, next) {
    try {
        const id = req.params.id;
        const order = await orderService.find(id);
        if (!order) {
            throw new Error('pedido não encontrado');
        }
        res.send(order);
    } catch (error) {
        next(error);
    }
}

async function totalByClient(req, res, next) {
    try {
        const client = req.body;
        if (!client.cliente) {
            throw new Error('cliente obrigatório');
        }
        const total = await orderService.totalByClient(client.cliente);
        if (!total) {
            throw new Error('pedidos do cliente não encontrado');
        }
        res.send({ "Cliente": client.cliente, "Total": total });
    } catch (error) {
        next(error);
    }
}

async function totalByProduct(_req, res, _next) {

}

async function bestSeller(_req, res, _next) {

}

async function index(_req, res, next) {
    try {
        const data = await orderService.index();
        res.send(data);
    } catch (error) {
        next(error)
    }
};

export default {
    create,
    update,
    updateStatus,
    remove,
    view,
    totalByClient,
    totalByProduct,
    bestSeller,
    index
}

