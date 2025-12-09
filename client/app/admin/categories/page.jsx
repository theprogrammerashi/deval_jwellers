"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminCategories() {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const res = await axios.get('http://localhost:5000/api/categories');
        setCategories(res.data);
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!newCategory) return;
        try {
            await axios.post('http://localhost:5000/api/categories', { name: newCategory });
            setNewCategory('');
            fetchCategories();
        } catch (error) {
            alert('Error adding category');
        }
    };

    return (
        <div>
            <h1 className="text-3xl text-gold-400 font-serif mb-8">Categories</h1>

            <div className="bg-dark-800 p-6 border border-white/10 rounded mb-8">
                <h3 className="text-lg text-white mb-4">Add New Category</h3>
                <form onSubmit={handleAdd} className="flex gap-4">
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Category Name (e.g., Rings)"
                        className="flex-1 bg-dark-900 border border-white/10 p-2 text-white outline-none focus:border-gold-400"
                    />
                    <button type="submit" className="bg-gold-400 text-black px-6 font-bold hover:bg-white transition-colors">
                        ADD
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map(cat => (
                    <div key={cat._id} className="bg-dark-800 p-4 border border-white/10 rounded flex justify-between items-center">
                        <span className="text-gray-300">{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
