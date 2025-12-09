"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
    const [stats, setStats] = useState({ products: 0, categories: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [prodRes, catRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/products'),
                    axios.get('http://localhost:5000/api/categories')
                ]);
                setStats({
                    products: prodRes.data.length,
                    categories: catRes.data.length
                });
            } catch (error) {
                console.error(error);
            }
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h1 className="text-3xl text-gold-400 font-serif mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-dark-800 p-6 border border-white/10 rounded">
                    <h3 className="text-gray-400 mb-2">Total Products</h3>
                    <p className="text-4xl text-white font-bold">{stats.products}</p>
                </div>
                <div className="bg-dark-800 p-6 border border-white/10 rounded">
                    <h3 className="text-gray-400 mb-2">Total Categories</h3>
                    <p className="text-4xl text-white font-bold">{stats.categories}</p>
                </div>
            </div>
        </div>
    );
}
