import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/ui/Layout';
import TaskList from '../components/tasks/TaskList';

const HomePage: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <Layout>
            <section className="p-8 bg-noir-dark text-ivory-light rounded-lg shadow-luxury">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-medium text-gold-accent">
                        Welcome, {user?.username || 'Guest'}
                    </h2>
                    <button onClick={logout} className="px-4 py-2 font-semibold text-noir-dark transition-colors duration-200 rounded-lg bg-gold-accent hover:bg-gold-accent">
                        Logout
                    </button>
                </div>
                <TaskList />
            </section>
        </Layout>
    );
};

export default HomePage; 