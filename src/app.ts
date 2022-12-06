import express from "express";
import dotenv from "dotenv";
import api from "./api";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", api);

export default app;
