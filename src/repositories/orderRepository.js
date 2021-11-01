import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function getData() {
    return JSON.parse(await readFile(global.FILE));
}

async function insert(order) {
    const data = await getData();
    const { cliente, produto, valor } = order;
    order = {
        id: data.nextId,
        cliente,
        produto,
        valor: parseFloat(valor),
        entregue: false,
        timestamp: new Date()
    }
    data.pedidos.push(order);
    data.nextId++;
    await writeFile(global.FILE, JSON.stringify(data, null, 2));
    return order;
}

async function findOne(id) {
    const data = await getData();
    return data.pedidos.find(order => order.id === parseInt(id));
}

async function update(order) {
    const data = await getData();
    const index = data.pedidos.findIndex(row => row.id === order.id);
    order = { id: order.id, ...order };
    data.pedidos[index] = order;
    await writeFile(global.FILE, JSON.stringify(data, null, 2));
    return order;
}

async function updateStatus(order) {
    const data = await getData();
    const index = data.pedidos.findIndex(row => row.id === order.id);
    data.pedidos[index].entregue = order.entregue;
    await writeFile(global.FILE, JSON.stringify(data, null, 2));
    return data.pedidos[index];
}

async function remove(id) {
    const data = await getData();
    data.pedidos = data.pedidos.filter(row => row.id !== parseInt(id));
    await writeFile(global.FILE, JSON.stringify(data, null, 2));
    return data.pedidos;
}

async function totalByClient(client) {
    const data = await getData();
    return data.pedidos
        .filter(row => row.cliente === client)
        .filter(row => row.entregue === true)
        .reduce((acc, row) => { return acc += row.valor; }, 0)};

async function totalByProduct(product) {
    const data = await getData();
    return data.pedidos
        .filter(row => row.produto === product)
        .filter(row => row.entregue === true)
        .reduce((acc, row) => { return acc += row.valor; }, 0)
};

async function bestSellers(product) {
    const data = await getData();
    return data.pedidos
        .filter(row => row.produto === product)
        .filter(row => row.entregue === true)
        .reduce((acc, row) => { return acc += row.valor; }, 0)
};

export default {
    getData,
    insert,
    findOne,
    update,
    updateStatus,
    remove,
    totalByClient,
    totalByProduct,
    bestSellers
}