const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/deval_jewelers';
mongoose.connect(MONGODB_URI)
    .then(async () => {
        console.log('✅ MongoDB Connected');
        // Auto-seed Categories if empty
        const Category = require('./models/Category');
        try {
            const count = await Category.countDocuments();
            if (count === 0) {
                const defaultCategories = [
                    { name: 'Necklaces' },
                    { name: 'Rings' },
                    { name: 'Earrings' },
                    { name: 'Bracelets' },
                    { name: 'Watches' }
                ];
                await Category.insertMany(defaultCategories);
                console.log('🌱 Default categories seeded');
            }
        } catch (err) {
            console.error('Seeding Error:', err);
        }
    })
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes (Placeholders)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));

app.get('/', (req, res) => {
    res.send('Deval Jewelers API is running');
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
