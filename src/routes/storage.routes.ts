import { Router } from "express";

import { addObjectController } from "../controllers";

import { fileUploader } from "../middlewares";

export const storageRouter = Router();

storageRouter.route("/add-object").post(fileUploader, addObjectController);
