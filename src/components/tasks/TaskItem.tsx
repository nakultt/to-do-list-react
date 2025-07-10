import React from 'react';
import type { Task } from '../../types/index.ts';
import { updateTask, deleteTask } from '../../api/taskApi';
import { useAuth } from '../../hooks/useAuth';

interface TaskItemProps {
    task: Task;
    onTaskUpdated: () => void;
    onTaskDeleted: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskUpdated, onTaskDeleted }) => {
    const { token } = useAuth();

    const handleUpdate = async () => {
        const newTaskName = prompt('Enter new task name:', task.taskName);
        if (newTaskName && newTaskName.trim() !== '' && token) {
            try {
                await updateTask(task._id, newTaskName, token);
                onTaskUpdated();
            } catch (error) {
                console.error("Failed to update task:", error);
                alert("Failed to update task.");
            }
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this task?') && token) {
            try {
                await deleteTask(task._id, token);
                onTaskDeleted();
            } catch (error) {
                console.error("Failed to delete task:", error);
                alert("Failed to delete task.");
            }
        }
    };

    return (
        <li className="flex items-center justify-between p-4 mb-3 transition-transform duration-200 transform bg-ivory-light border border-gold-accent rounded-lg shadow-luxury hover:-translate-y-1">
            <span className="text-lg text-noir-dark">{task.taskName}</span>
            <div className="flex gap-2">
                <button onClick={handleUpdate} className="px-4 py-2 text-sm font-semibold text-noir-dark rounded-md bg-gold-accent hover:bg-gold-accent">Edit</button>
                <button onClick={handleDelete} className="px-4 py-2 text-sm font-semibold text-white bg-danger rounded-md hover:bg-danger-dark">Delete</button>
            </div>
        </li>
    );
};

export default TaskItem; 