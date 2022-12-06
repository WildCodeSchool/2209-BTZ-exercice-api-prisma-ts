import { Router } from "express";
import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
// add the rest of the routes here

export default router;
