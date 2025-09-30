import { useEffect, useState } from "react";
import { getTasks, createTask } from "./services/taskService";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await getTasks();
                setTasks(res.data.tasks);
            } catch (err) {
                console.error("Error fetching tasks:", err);
            }
        };

        fetchTasks();
    }, []);

    const addTask = async (task) => {
        try {
            const res = await createTask(task);
            setTasks((prev) => [...prev, res.data.task]);
        } catch (err) {
            console.error("Error creating task:", err);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "20px"
            }}
        >
            {" "}
            <h1>Task Manager</h1>
            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
