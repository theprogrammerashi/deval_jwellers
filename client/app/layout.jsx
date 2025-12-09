import './globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Deval Jewelers | Luxury Redefined',
    description: 'Exquisite jewelry for the daring soul.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-sans antialiased bg-dark-900 text-white">
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
