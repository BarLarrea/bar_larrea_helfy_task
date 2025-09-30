import React from "react";

const TaskItem = ({ task }) => {
    if (!task) return null;

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "8px",
                margin: "8px 0",
                width: "100%"
            }}
        >
            <h3>{task.title || "Untitled Task"}</h3>
            <p>{task.description || "No description provided"}</p>
            <p>Priority: {task.priority || "Not set"}</p>
            <p>Status: {task.completed ? "Completed" : "Pending"}</p>
            <p>
                Created at:{" "}
                {task.createdAt
                    ? new Date(task.createdAt).toLocaleString()
                    : "Unknown"}
            </p>
        </div>
    );
};

export default TaskItem;
