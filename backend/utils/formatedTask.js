export const formatTask = (task) => {
    return {
        id: task.id,
        title: task.title,
        description: task.description,
        completed: task.completed,
        createdAt: task.createdAt,
        priority: task.priority
    };
};
