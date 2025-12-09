"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

export default function AdminProducts() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        type: '',
        description: '',
        image: null
    });

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
    };

    const fetchCategories = async () => {
        const res = await axios.get('http://localhost:5000/api/categories');
        setCategories(res.data);
    };

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            await axios.post('http://localhost:5000/api/products', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            fetchProducts();
            setFormData({ name: '', price: '', category: '', type: '', description: '', image: null });
        } catch (error) {
            alert('Error adding product');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure?')) return;
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            fetchProducts();
        } catch (error) {
            alert('Error deleting product');
        }
    }

    return (
        <div>
            <h1 className="text-3xl text-gold-400 font-serif mb-8">Products</h1>

            {/* Add Product Form */}
            <div className="bg-dark-800 p-6 border border-white/10 rounded mb-8">
                <h3 className="text-lg text-white mb-4">Add New Product</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text" name="name" placeholder="Product Name" required
                        value={formData.name} onChange={handleChange}
                        className="bg-dark-900 border border-white/10 p-2 text-white outline-none focus:border-gold-400"
                    />
                    <input
                        type="number" name="price" placeholder="Price" required
                        value={formData.price} onChange={handleChange}
                        className="bg-dark-900 border border-white/10 p-2 text-white outline-none focus:border-gold-400"
                    />
                    <select
                        name="category" required
                        value={formData.category} onChange={handleChange}
                        className="bg-dark-900 border border-white/10 p-2 text-white outline-none focus:border-gold-400"
                    >
                        <option value="">Select Category</option>
                        {categories.map(cat => (
                            <option key={cat._id} value={cat._id}>{cat.name}</option>
                        ))}
                    </select>
                    <input
                        type="text" name="type" placeholder="Type (Gold, Silver, etc.)" required
                        value={formData.type} onChange={handleChange}
                        className="bg-dark-900 border border-white/10 p-2 text-white outline-none focus:border-gold-400"
                    />
                    <textarea
                        name="description" placeholder="Description"
                        value={formData.description} onChange={handleChange}
                        className="bg-dark-900 border border-white/10 p-2 text-white outline-none focus:border-gold-400 col-span-1 md:col-span-2"
                    ></textarea>
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-gray-400 text-sm block mb-1">Product Image</label>
                        <input type="file" name="image" accept="image/*" required onChange={handleChange} className="text-gray-400" />
                    </div>

                    <button type="submit" className="col-span-1 md:col-span-2 bg-gold-400 text-black py-2 font-bold hover:bg-white transition-colors">
                        UPLOAD PRODUCT
                    </button>
                </form>
            </div>

            {/* Product List */}
            <div className="bg-dark-800 border border-white/10 rounded overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-dark-900 text-gold-400 border-b border-white/10">
                        <tr>
                            <th className="p-4">Image</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Price</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {products.map(p => (
                            <tr key={p._id} className="hover:bg-white/5">
                                <td className="p-4">
                                    <img src={`http://localhost:5000${p.image}`} alt={p.name} className="w-12 h-12 object-cover rounded" />
                                </td>
                                <td className="p-4 text-white">{p.name}</td>
                                <td className="p-4 text-gray-400">{p.category?.name}</td>
                                <td className="p-4 text-gray-400">₹{p.price}</td>
                                <td className="p-4">
                                    <button onClick={() => handleDelete(p._id)} className="text-red-400 hover:text-red-300">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
