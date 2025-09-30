import express from "express";

import {
    getAllTasks,
    createNewTask,
    updateTask,
    toggleTaskStatus,
    deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createNewTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.patch("/:id/toggle", toggleTaskStatus);

export default router;
