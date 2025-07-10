import React, { type ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
    <div className="flex flex-col items-center min-h-screen bg-noir-dark text-ivory-light">
        <header className="w-full py-5 text-center bg-noir-dark text-gold-accent shadow-luxury">
            <h1 className="text-4xl font-semibold">To-Do List Manager</h1>
        </header>
        <main className="w-full max-w-3xl p-5">
            {children}
        </main>
    </div>
);

export default Layout; 