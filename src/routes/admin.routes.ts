import { Router } from "express";
import { createBuckerController } from "../controllers";

export const adminRouter = Router();

adminRouter.route("/create-bucket").post(createBuckerController);
