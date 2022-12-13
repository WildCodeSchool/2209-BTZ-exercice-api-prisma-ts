import express from "express";
import dotenv from "dotenv";
import api from "./api";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: ["Authorization"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1", api);

export default app;
