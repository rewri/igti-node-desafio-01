import express from "express";
import orderRoutes from "./src/routes/orderRoutes.js";

const app = express();
app.use(express.json());

global.PORT = 3000;
global.FILE = "./data/pedidos.json";

app.get("/", (_req, res) => res.json({ message: 'Server is running!' }));
app.use("/pedido", orderRoutes);

app.listen(global.PORT, () => {
    console.log(`Server is running on global.PORT ${PORT}`);
});
