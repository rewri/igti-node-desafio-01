import express from "express";
import orderController from "../controllers/orderController.js";

const router = express.Router();

router.post("/", orderController.create);
router.put("/:id", orderController.update);
router.patch("/entrega", orderController.updateStatus);
router.delete("/:id", orderController.remove);
router.get("/total-cliente", orderController.totalByClient);
router.get("/total-produto", orderController.totalByProduct);
router.get("/mais-vendidos", orderController.bestSellers);
router.get("/:id", orderController.view);
router.get("/", orderController.index);

router.use((err, _req, res, _next) => {
    console.error(err);
    res.status(400).send({ error: err.message })
});

export default router;