import { Router } from "express";
import * as PetsController from './../controllers/petsController.js'

const router = Router();

// Rota GetAll em / 
router.get("/", PetsController.listarTodos);


// Rota do GetById
router.get("/:id", PetsController.listarUm)


export default router;
