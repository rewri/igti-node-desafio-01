import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

import orderRepository from "../repositories/orderRepository.js";

async function create(order) {
    return await orderRepository.insert(order);
}

async function index() {
    return await orderRepository.getData();
}

export default { 
    create,
    index
}