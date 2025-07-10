import React, { createContext, useState, useEffect, type ReactNode } from 'react';
import { fetchCurrentUser } from '../api/userApi';
import type { User, AuthContextType } from '../types/index.ts';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            const verifyUser = async () => {
                try {
                    const currentUser = await fetchCurrentUser(token);
                    setUser(currentUser);
                } catch (error) {
                    console.error("Session expired or invalid:", error);
                    logout();
                }
            };
            verifyUser();
        }
    }, [token]);

    const login = (newToken: string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}; 