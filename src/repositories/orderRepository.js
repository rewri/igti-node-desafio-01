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

export default {
    getData,
    insert,
    findOne,
    update
}