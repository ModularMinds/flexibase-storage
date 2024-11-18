import { Router } from "express";
import { storageRouter } from "./storage.routes";

export const rootRouter = Router();

rootRouter.use("/storage/admin");
rootRouter.use("/storage", storageRouter);
