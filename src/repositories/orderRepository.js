import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function getData() {
    const data = JSON.parse(await readFile(global.FILE));
    return data.pedidos;
}

async function insert() {
    const data = await getData();
    const { cliente, produto, valor } = order;
    order = {
        id: data.nextId++,
        cliente,
        produto,
        valor: parseFloat(valor),
        entregue: false,
        timestamp: new Date()
    }
    data.pedidos.push(order);
    //await writeFile(global.FILE, JSON.stringify(data, null, 2));
    return order;
}

export default {
    getData,
    insert
}