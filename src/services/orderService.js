import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

import orderRepository from "../repositories/orderRepository.js";

async function create(order) {
    return await orderRepository.insert(order);
}

async function index() {
    return await orderRepository.getData();
}

async function find(id) {
    return await orderRepository.findOne(id);
}

async function findIndex(id) {
    return await orderRepository.findOne(id);
}

async function update(order) {
    return await orderRepository.update(order);
}

async function updateStatus(order) {
    return await orderRepository.updateStatus(order);
}

export default { 
    create,
    index,
    find,
    findIndex,
    update,
    updateStatus,
}