import React from "react";

const TaskItem = ({ task }) => {
    return (
        <div className='task-iten'>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.completed ? "Completed" : "On procces"}</p>
            <p>Created at: {new Date(task.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default TaskItem;
