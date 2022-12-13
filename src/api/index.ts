import { Router } from "express";
import books from "./book/routes";
import collections from "./collection/routes";
import auth from "./auth/routes";

const router = Router();

router.use("/auth", auth);
router.use("/books", books);
router.use("/collections", collections);

export default router;
