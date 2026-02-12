import cors from "cors";
import express from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./generated/routes";

const app = express();

app.use(cors());
app.use(express.json());

RegisterRoutes(app);

const swaggerDocument = require(path.join(process.cwd(), "src", "generated", "swagger.json"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };
