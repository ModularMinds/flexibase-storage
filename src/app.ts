import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { rootRouter } from "./routes";

config();

const app = express();
app.use(cors());

app.use("/", rootRouter);

app.listen(process.env.FLEXIBASE_STORAGE_EXPOSE_PORT, () => {
  console.log(
    `FlexiBase-Storage service started successfully on port ${process.env.FLEXIBASE_STORAGE_EXPOSE_PORT}`
  );
});
