import dotenv from "dotenv";

import "reflect-metadata";

import express from "express";

import "./database";

import { routes } from "./routes";

dotenv.config();

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
