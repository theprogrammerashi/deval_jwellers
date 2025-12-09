import Hero from '../components/Hero';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-between">
            <Hero />
            <section className="py-20 text-center">
                <h2 className="text-4xl font-serif text-gold-400 mb-4">Timeless Elegance</h2>
                <p className="max-w-2xl mx-auto text-gray-300">Discover our exclusive collection of hand-crafted masterpieces.</p>
                {/* Featured Products Component will go here */}
            </section>
        </div>
    )
}
