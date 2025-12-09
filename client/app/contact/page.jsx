"use client";
import { useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
            <h1 className="text-4xl font-serif text-center text-gold-400 mb-8">Contact Us</h1>

            {submitted ? (
                <div className="text-center p-8 bg-dark-800 border border-gold-400 rounded">
                    <h2 className="text-2xl text-white mb-2">Thank You</h2>
                    <p className="text-gray-400">We have received your inquiry and will contact you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-dark-800 p-8 rounded border border-white/5">
                    <div>
                        <label className="block text-gray-400 mb-2">Name</label>
                        <input type="text" required className="w-full bg-dark-900 border border-white/10 p-3 text-white outline-none focus:border-gold-400" />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Email</label>
                        <input type="email" required className="w-full bg-dark-900 border border-white/10 p-3 text-white outline-none focus:border-gold-400" />
                    </div>
                    <div>
                        <label className="block text-gray-400 mb-2">Message</label>
                        <textarea required rows="5" className="w-full bg-dark-900 border border-white/10 p-3 text-white outline-none focus:border-gold-400"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gold-400 text-black py-4 font-bold tracking-widest hover:bg-white transition-colors">
                        SEND INQUIRY
                    </button>
                </form>
            )}
        </div>
    );
}
