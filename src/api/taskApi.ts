import type { Task } from '../types/index.ts';

const API_URL = "https://to-do-list-app-xsqu.onrender.com/api";

export const fetchTasks = async (token: string): Promise<Task[]> => {
    const response = await fetch(`${API_URL}/tasks`, {
        headers: { 
            'Authorization': `Bearer ${token}` 
        }
    });
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
};

export const createTask = (taskName: string, token: string) => {
    const response = fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ taskName }),
    });
    return response;
};

export const updateTask = (id: string, taskName: string, token: string) => {
    const response = fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ taskName }),
    });
    return response;
};

export const deleteTask = (id: string, token: string) => {
    const response = fetch(`${API_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: { 
            'Authorization': `Bearer ${token}` 
        },
    });
    return response;
}; 