import orderService from "../services/orderService.js"

async function create(req, res, next) {
    try {
        let order = req.body;
        if (!order.cliente || !order.produto || !order.valor) {
            throw new Error('cliente, produto e valor são obrigatórios.');
        }
        order = await orderService.create(order);
        res.send(order);
    } catch (error) {
        next(error);
    }
}

async function update(_req, res, _next) {

}

async function updateStatus(_req, res, _next) {

}

async function remove(_req, res, _next) {

}

async function view(req, res, next) {
   
}

async function totalByClient(_req, res, _next) {

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

