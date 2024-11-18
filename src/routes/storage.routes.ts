import { Router } from "express";
import { addObjectController } from "../controllers";

export const storageRouter = Router();

storageRouter.route("/add-object").post(addObjectController);
