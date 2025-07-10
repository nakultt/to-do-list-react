import type { User } from '../types/index.ts';

const API_URL = "https://to-do-list-app-xsqu.onrender.com/api";

export const registerUser = (username:string,email:string,password:string) => {
  return fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ username, email, password }),
  });
};

export const loginUser = (email:string,password:string) => {
  return fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ email, password }),
  });
};

export const fetchCurrentUser = async (token: string): Promise<User> => {
    const response = await fetch(`${API_URL}/users/current`, {
        headers: { 
          'Authorization': `Bearer ${token}` 
        }
    });
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
}; 