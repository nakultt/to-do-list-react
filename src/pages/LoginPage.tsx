import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/ui/Layout';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

const LoginPage: React.FC = () => {
    const [showLogin, setShowLogin] = useState(true);
    const { token } = useAuth();

    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <Layout>
            <section className="p-8 bg-noir-dark rounded-lg shadow-luxury text-ivory-light">
                <h2 className="mb-6 text-3xl font-medium text-center text-gold-accent">{showLogin ? 'Login' : 'Register'}</h2>
                {showLogin ? <LoginForm /> : <RegisterForm onSuccess={() => setShowLogin(true)} />}
                <p className="mt-6 text-center">
                    {showLogin ? "Don't have an account? " : "Already have an account? "}
                    <a href="#" onClick={(e) => { e.preventDefault(); setShowLogin(!showLogin); }} className="font-semibold text-gold-accent hover:underline">
                        {showLogin ? 'Register here' : 'Login here'}
                    </a>
                </p>
            </section>
        </Layout>
    );
};

export default LoginPage; 