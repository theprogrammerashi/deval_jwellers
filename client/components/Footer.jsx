import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark-800 text-gray-300 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-serif text-gold-400 mb-4">DEVAL JEWELERS</h3>
                        <p className="text-sm text-gray-400">
                            Crafting eternal beauty for those who dare to shine. Luxury in every detail.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/shop" className="hover:text-gold-400 transition-colors">Shop</Link></li>
                            <li><Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gold-400 transition-colors"><FaInstagram size={24} /></a>
                            <a href="#" className="hover:text-gold-400 transition-colors"><FaFacebook size={24} /></a>
                            <a href="#" className="hover:text-gold-400 transition-colors"><FaTwitter size={24} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Deval Jewelers. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
