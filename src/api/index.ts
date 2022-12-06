import { Router } from "express";
import books from "./book/routes";

const router = Router();

router.use("/books", books);

export default router;
