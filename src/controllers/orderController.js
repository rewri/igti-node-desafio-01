import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function create(_req, res, _next) {
    const data = await "teste";
    res.send(data);
}

async function update(_req, res, _next) {
    const data = await "update";
    res.send(data);
}

async function updateStatus(_req, res, _next) {
    const data = await "update status";
    res.send(data);
}

async function remove(_req, res, _next) {
    const data = await "delete";
    res.send(data);
}

async function view(_req, res, _next) {
    const data = await "view";
    res.send(data);
}

async function totalByClient(_req, res, _next) {
    const data = await "total por cliente";
    res.send(data);
}

async function totalByProduct(_req, res, _next) {
    const data = await "total por produto";
    res.send(data);
}

async function bestSeller(_req, res, _next) {
    const data = await "mais vendidos";
    res.send(data);
}

async function index(_req, res, next) {
    try {
        const data = JSON.parse(await readFile(global.FILE));
        if (!data) {
            res.status(204);
        }
        delete data.nextId;
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

