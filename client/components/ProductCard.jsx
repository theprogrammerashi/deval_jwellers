"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import API_URL from '../config/api';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-dark-800 border border-white/5 rounded-sm overflow-hidden"
        >
            <div className="relative aspect-square overflow-hidden">
                {/* Fallback image if product.image is missing or relative path */}
                <img
                    src={product.image.startsWith('http') ? product.image : `${API_URL}${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                        href={`/product/${product._id}`}
                        className="bg-gold-500 text-black px-6 py-2 uppercase text-sm font-bold tracking-wider hover:bg-white transition-colors"
                    >
                        View Details
                    </Link>
                </div>
            </div>

            <div className="p-4 text-center">
                <p className="text-xs text-gold-400 mb-1 uppercase tracking-widest">{product.category?.name || 'Jewelry'}</p>
                <h3 className="text-white font-serif text-lg mb-2">{product.name}</h3>
                <p className="text-gray-300">₹{product.price.toLocaleString()}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
