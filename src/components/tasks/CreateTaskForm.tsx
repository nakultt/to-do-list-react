import React, { useState } from 'react';
import { createTask } from '../../api/taskApi';
import { useAuth } from '../../hooks/useAuth.ts';
import Input from '../ui/Input';

interface CreateTaskFormProps {
    onTaskCreated: () => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onTaskCreated }) => {
    const [taskName, setTaskName] = useState('');
    const { token } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!taskName.trim() || !token) return;

        try {
            const response = await createTask(taskName, token);
            if (response.ok) {
                setTaskName('');
                onTaskCreated();
            } else {
                alert('Failed to create task.');
            }
        } catch (error) {
            console.error('Error creating task:', error);
            alert('An error occurred while creating the task.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-6 p-6 rounded-lg shadow-luxury bg-ivory-light">
            <Input
                type="text"
                placeholder="Enter a new task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
            />
            <button type="submit" className="px-8 py-3 font-semibold text-noir-dark transition-colors duration-200 rounded-lg bg-gold-accent hover:bg-gold-accent">
                Create
            </button>
        </form>
    );
};

export default CreateTaskForm; 