"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>

            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-gold-400 mb-6 tracking-wide"
                >
                    DEVAL JEWELERS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-white mb-8 font-light"
                >
                    Unleash Your Inner Radiance
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        href="/shop"
                        className="inline-block border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-10 py-3 text-lg transition-all duration-300 uppercase tracking-widest font-semibold"
                    >
                        Explore Collection
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
