import orderRepository from "../repositories/orderRepository.js";

async function index() {
    return await orderRepository.getData();
}

async function create(order) {
    return await orderRepository.insert(order);
}

async function find(id) {
    return await orderRepository.findOne(id);
}

async function update(order) {
    return await orderRepository.update(order);
}

async function updateStatus(order) {
    return await orderRepository.updateStatus(order);
}

async function remove(id) {
    return await orderRepository.remove(id);
}

async function totalByClient(cliente) {
    return await orderRepository.totalByClient(cliente);
}

async function totalByProduct(product) {
    return await orderRepository.totalByProduct(product);
}

async function bestSellers() {
    return await orderRepository.bestSellers();
}

export default { 
    index,
    create,
    find,
    update,
    updateStatus,
    remove,
    totalByClient,
    totalByProduct,
    bestSellers
}