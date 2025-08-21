
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Input from '../components/Input';
import Button from '../components/Button';
import EyeIcon from '../components/icons/EyeIcon';

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('password');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd validate credentials here
        if (email && password) {
            login();
        }
    };

    return (
        <div className="w-[375px] h-[812px] bg-blue-600 shadow-2xl rounded-[40px] overflow-hidden flex flex-col justify-center items-center p-8 border-4 border-black">
            <h1 className="text-4xl font-bold text-white mb-12">SMS Gateway</h1>
            <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
                <Input
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-blue-500 border-blue-400 text-white placeholder-blue-300"
                />
                <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon={<EyeIcon isOpen={showPassword} />}
                    onIconClick={() => setShowPassword(!showPassword)}
                    className="bg-blue-500 border-blue-400 text-white placeholder-blue-300"
                />
                <div className="mt-4">
                    <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100">LOGIN</Button>
                </div>
            </form>
            <a href="#" className="text-blue-200 mt-6 text-sm">Forgot password?</a>
        </div>
    );
};

export default LoginScreen;
