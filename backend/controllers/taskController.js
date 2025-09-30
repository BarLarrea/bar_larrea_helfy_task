import { tasks, createTask } from "../models/taskModel.js";
import { formatTask } from "../utils/formatedTask.js";

const getAllTasks = (req, res, next) => {
    try {
        if (!tasks || tasks.length === 0) {
            const error = new Error("No tasks found");
            error.status = 404;
            throw error;
        }

        res.status(200).json({
            message: "Tasks sent successfully",
            tasks: tasks.map(formatTask)
        });
    } catch (err) {
        next(err);
    }
};

const createNewTask = (req, res, next) => {
    try {
        const { title, description, priority } = req.body;

        if (!title || !description) {
            const error = new Error("Title and description are required");
            error.status = 400;
            throw error;
        }

        if (priority && !["low", "medium", "high"].includes(priority)) {
            const error = new Error(
                "Priority must be only one of: low, medium, high"
            );
            error.status = 400;
            throw error;
        }

        const newTask = createTask({ title, description, priority });
        tasks.push(newTask);

        res.status(201).json({
            message: "Task created successfully",
            task: formatTask(newTask)
        });
    } catch (err) {
        next(err);
    }
};

const updateTask = (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, description, priority } = req.body;

        if (!title || !description) {
            const error = new Error("Title and description are required");
            error.status = 400;
            throw error;
        }

        if (priority && !["low", "medium", "high"].includes(priority)) {
            const error = new Error(
                "Priority must be only one of: low, medium, high"
            );
            error.status = 400;
            throw error;
        }

        const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

        if (taskIndex === -1) {
            const error = new Error("Task not found");
            error.status = 404;
            throw error;
        }

        const existingTask = tasks[taskIndex];

        tasks.splice(taskIndex, 1, {
            ...existingTask,
            title,
            description,
            priority: priority || existingTask.priority
        });

        res.status(200).json({
            message: "Task updated successfully",
            taskUpdated: formatTask(tasks[taskIndex])
        });
    } catch (err) {
        next(err);
    }
};

const toggleTaskStatus = (req, res, next) => {
    try {
        const { id } = req.params;

        const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

        if (taskIndex === -1) {
            const error = new Error("Task not found");
            error.status = 404;
            throw error;
        }

        tasks[taskIndex].completed = !tasks[taskIndex].completed;

        const message = tasks[taskIndex].completed
            ? "Task marked as completed"
            : "Task marked as not completed";

        res.status(200).json({
            message,
            taskUpdated: formatTask(tasks[taskIndex])
        });
    } catch (err) {
        next(err);
    }
};

const deleteTask = (req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) {
            const error = new Error("Task ID is required");
            error.status = 400;
            throw error;
        }

        const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

        if (taskIndex === -1) {
            const error = new Error("Task not found");
            error.status = 404;
            throw error;
        }

        tasks.splice(taskIndex, 1);

        res.status(200).json({
            message: "Task deleted successfully"
        });
    } catch (err) {
        next(err);
    }
};

export { getAllTasks, createNewTask, updateTask, toggleTaskStatus, deleteTask };
