"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(res.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };
        if (id) fetchProduct();
    }, [id]);

    if (loading) return <div className="min-h-screen pt-24 text-center text-white">Loading...</div>;
    if (!product) return <div className="min-h-screen pt-24 text-center text-white">Product not found</div>;

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="relative group overflow-hidden border border-white/5 rounded-sm">
                    <img
                        src={product.image.startsWith('http') ? product.image : `http://localhost:5000${product.image}`}
                        alt={product.name}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-125 cursor-zoom-in"
                    />
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">{product.name}</h1>
                    <p className="text-gold-400 text-xl mb-6">₹{product.price.toLocaleString()}</p>

                    <div className="mb-8">
                        <span className="inline-block border border-white/20 px-3 py-1 text-xs text-gray-400 uppercase mr-2">{product.category?.name}</span>
                        <span className="inline-block border border-white/20 px-3 py-1 text-xs text-gray-400 uppercase">{product.type}</span>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8">
                        {product.description || "An exquisite piece of craftsmanship designed to elevate your style. Made with premium materials and attention to detail."}
                    </p>

                    <button
                        onClick={() => window.location.href = '/contact'}
                        className="bg-gold-500 text-black py-4 uppercase font-bold tracking-widest hover:bg-white transition-colors w-full md:w-auto"
                    >
                        Inquire Now
                    </button>
                </div>
            </div>
        </div>
    );
}
