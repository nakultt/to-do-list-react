import React, { useState, useEffect, useCallback } from 'react';
import { fetchTasks } from '../../api/taskApi';
import { useAuth } from '../../hooks/useAuth';
import type { Task } from '../../types/index.ts';
import TaskItem from './TaskItem';
import CreateTaskForm from './CreateTaskForm';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { token } = useAuth();

    const getTasks = useCallback(async () => {
        if (!token) return;
        setIsLoading(true);
        try {
            const fetchedTasks = await fetchTasks(token);
            setTasks(fetchedTasks);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        } finally {
            setIsLoading(false);
        }
    }, [token]);

    useEffect(() => {
        getTasks();
    }, [getTasks]);
    
    if (isLoading) return <p className="text-center">Loading tasks...</p>;

    return (
        <div className="p-8 rounded-lg shadow-luxury bg-ivory-light">
            <CreateTaskForm onTaskCreated={getTasks} />
            <ul className="p-0 list-none">
                {tasks.map(task => (
                    <TaskItem 
                        key={task._id} 
                        task={task} 
                        onTaskUpdated={getTasks} 
                        onTaskDeleted={getTasks} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList; 