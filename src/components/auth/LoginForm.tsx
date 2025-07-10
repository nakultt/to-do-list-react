import React, { useState } from 'react';
import { loginUser } from '../../api/userApi';
import { useAuth } from '../../hooks/useAuth.ts';
import Input from '../ui/Input';
import Button from '../ui/Button';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const response = await loginUser(email, password);
            if (response.ok) {
                const data = await response.json();
                login(data.accessToken);
            } else {
                setError('Invalid email or password.');
            }
        } catch (err) {
            setError(`An error occurred. Please try again,${err}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 rounded-lg shadow-luxury bg-ivory-light">
            <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            {error && <p className="text-sm text-center text-danger">{error}</p>}
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm; 