"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [prodRes, catRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/products'),
                    axios.get('http://localhost:5000/api/categories')
                ]);
                setProducts(prodRes.data);
                setCategories(catRes.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category?.name === filter);

    if (loading) return <div className="min-h-screen pt-24 text-center text-white">Loading Luxury...</div>;

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-serif text-center text-gold-400 mb-12">Our Collection</h1>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                    onClick={() => setFilter('All')}
                    className={`px-4 py-2 border border-gold-400 uppercase text-sm tracking-wider transition-colors ${filter === 'All' ? 'bg-gold-400 text-black' : 'text-gold-400 hover:bg-gold-400 hover:text-black'}`}
                >
                    All
                </button>
                {categories.map(cat => (
                    <button
                        key={cat._id}
                        onClick={() => setFilter(cat.name)}
                        className={`px-4 py-2 border border-gold-400 uppercase text-sm tracking-wider transition-colors ${filter === cat.name ? 'bg-gold-400 text-black' : 'text-gold-400 hover:bg-gold-400 hover:text-black'}`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}
