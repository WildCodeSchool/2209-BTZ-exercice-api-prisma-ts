import { Router } from "express";
import books from "./book/routes";
import collections from "./collection/routes";

const router = Router();

router.use("/books", books);
router.use("/collections", collections);

export default router;
