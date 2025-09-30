import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) return;

        onAdd({ title, description, priority });

        setTitle("");
        setDescription("");
        setPriority("low");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ marginBottom: "20px" }}
        >
            <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginRight: "10px" }}
                required
            />
            <input
                type='text'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ marginRight: "10px" }}
                required
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                style={{ marginRight: "10px" }}
            >
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
            </select>
            <button type='submit'>Add Task</button>
        </form>
    );
};

export default TaskForm;
