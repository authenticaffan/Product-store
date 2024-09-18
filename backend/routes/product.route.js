import express, { Router } from "express";
import { createProducts, deleteProducts, getProducts, updateproducts } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.put("/:id", updateproducts);
router.delete("/:id", deleteProducts);

export default router;