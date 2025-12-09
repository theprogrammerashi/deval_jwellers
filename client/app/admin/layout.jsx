"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        if (pathname === '/admin/login') {
            setAuthorized(true);
            return;
        }
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
        } else {
            setAuthorized(true);
        }
    }, [pathname, router]);

    if (!authorized) return null;

    if (pathname === '/admin/login') return <>{children}</>;

    return (
        <div className="min-h-screen flex pt-20">
            <aside className="w-64 bg-dark-800 border-r border-white/10 hidden md:block h-[calc(100vh-5rem)] fixed">
                <nav className="p-4 space-y-2">
                    <Link href="/admin/dashboard" className={`block px-4 py-2 rounded ${pathname === '/admin/dashboard' ? 'bg-gold-400/20 text-gold-400' : 'text-gray-400 hover:text-white'}`}>
                        Dashboard
                    </Link>
                    <Link href="/admin/products" className={`block px-4 py-2 rounded ${pathname === '/admin/products' ? 'bg-gold-400/20 text-gold-400' : 'text-gray-400 hover:text-white'}`}>
                        Products
                    </Link>
                    <Link href="/admin/categories" className={`block px-4 py-2 rounded ${pathname === '/admin/categories' ? 'bg-gold-400/20 text-gold-400' : 'text-gray-400 hover:text-white'}`}>
                        Categories
                    </Link>
                    <button
                        onClick={() => {
                            localStorage.removeItem('token');
                            router.push('/admin/login');
                        }}
                        className="block w-full text-left px-4 py-2 text-red-400 hover:text-red-300 mt-8"
                    >
                        Logout
                    </button>
                </nav>
            </aside>
            <main className="flex-1 md:ml-64 p-8 bg-black/50">
                {children}
            </main>
        </div>
    );
}
