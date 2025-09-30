import React, { useState, useRef, useCallback, useEffect } from "react";
import TaskItem from "./taskItem/TaskItem";

const TaskList = ({ tasks }) => {
    const [visibleTasks, setVisibleTasks] = useState([]);
    const observer = useRef(null);

    useEffect(() => {
        setVisibleTasks(tasks);
    }, [tasks]);

    const lastTaskRef = useCallback(
        (node) => {
            if (!node) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleTasks((prev) => [...prev, ...tasks]);
                }
            });

            observer.current.observe(node);
        },
        [tasks]
    );

    if (!visibleTasks || visibleTasks.length === 0) return <p>No tasks yet</p>;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                border: "1px solid black",
                padding: "10px",
                width: "100%",
                maxWidth: "400px",
                maxHeight: "300px"
            }}
        >
            {visibleTasks.map((task, index) => {
                if (index === visibleTasks.length - 1) {
                    return (
                        <div
                            ref={lastTaskRef}
                            key={task.id}
                            style={{ marginBottom: "10px" }}
                        >
                            <TaskItem task={task} />
                        </div>
                    );
                }
                return (
                    <div
                        key={task.id}
                        style={{ marginBottom: "10px" }}
                    >
                        <TaskItem task={task} />
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
