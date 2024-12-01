import "./config/env";

import express from "express";

import cors from "cors";

import { config } from "dotenv";

import { rootRouter } from "./routes";

import { db } from "./config";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", rootRouter);

app.get("/api/storage/service-check", (_, res) => {
  res.json({ isServiceAvailable: true });
});

// db.connect((err) => {
//   if (err) {
//     console.log("Error connecting to MySQL:", JSON.stringify(err, null, 1));
//     process.exit(0);
//   } else console.log("Connected to MySQL");

//   db.query(
//     `
//     CREATE TABLE IF NOT EXISTS storage (
//         id VARCHAR(100) PRIMARY KEY,
//         fileName VARCHAR(100) NOT NULL,
//         bucketName VARCHAR(100) NOT NULL
//     )`,
//     (err) => {
//       if (err) {
//         console.log(
//           "Error occurred while creating table storage: ",
//           err.message
//         );
//         process.exit(0);
//       }

app.listen(process.env.FLEXIBASE_STORAGE_EXPOSE_PORT, () => {
  console.log(
    `FlexiBase-Storage service started successfully on port ${process.env.FLEXIBASE_STORAGE_EXPOSE_PORT}`
  );
});
//     }
//   );
// });
