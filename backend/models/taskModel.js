let tsks = [];

function createTask({ title, description, priority }) {
    return {
        id: Date.now(),
        title,
        description,
        completed: false,
        createdAt: new Date(),
        priority: priority || "low"
    };
}

export { tasks, createTask };
