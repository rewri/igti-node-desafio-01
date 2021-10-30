import express from "express";
import orderController from "../controllers/orderController.js";

const router = express.Router();

router.post("/", orderController.create);

router.put("/:id(\\d+)/", orderController.update);

router.put("/entrega/:id(\\d+)/", orderController.updateStatus);

router.delete("/:id(\\d+)/", orderController.remove);

router.get("/:id(\\d+)/", orderController.view);

router.get("/total-cliente/:id(\\d+)/", orderController.totalByClient);

router.get("/total-produto/:id(\\d+)/", orderController.totalByProduct);

router.get("/mais-vendidos", orderController.bestSeller);

router.get("/", orderController.index);

export default router;