"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import API_URL from '../../../config/api';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/api/auth/login`, { username, password });
            localStorage.setItem('token', res.data.token);
            router.push('/admin/dashboard');
        } catch (error) {
            console.error('Login Error:', error);
            if (error.response) {
                // Server responded with a status code (e.g., 401, 500)
                alert(error.response.data.message || 'Login failed');
            } else if (error.request) {
                // The request was made but no response was received (Network Error)
                alert('Network Error: Could not connect to backend. Please check your internet connection or API URL configuration.');
            } else {
                alert('Error: ' + error.message);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-900">
            <div className="bg-dark-800 p-8 rounded border border-white/10 w-full max-w-md">
                <h2 className="text-2xl text-gold-400 font-serif mb-6 text-center">Admin Access</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-400 mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-dark-900 border border-white/10 p-2 text-white outline-none focus:border-gold-400"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-dark-900 border border-white/10 p-2 text-white outline-none focus:border-gold-400"
                        />
                    </div>
                    <button type="submit" className="w-full bg-gold-400 text-black py-2 font-bold hover:bg-white transition-colors">
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
}
