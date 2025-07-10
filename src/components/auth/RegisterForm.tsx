import React, { useState } from 'react';
import { registerUser } from '../../api/userApi';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface RegisterFormProps {
    onSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const response = await registerUser(username, email, password);
            if (response.ok) {
                alert('Registration successful! Please log in.');
                onSuccess();
            } else {
                setError('Registration failed. Email or username may be taken.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 rounded-lg shadow-luxury bg-ivory-light">
            <Input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
            <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            {error && <p className="text-sm text-center text-danger">{error}</p>}
            <Button type="submit">Register</Button>
        </form>
    );
};

export default RegisterForm; 