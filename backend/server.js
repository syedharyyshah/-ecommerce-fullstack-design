require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authRouter = require('./routes/auth/auth-routes');
const adminProductsRouter = require('./routes/admin/products-routes');
const shopProductsRouter = require('./routes/shop/products-routes');
const shopCartRouter = require('./routes/shop/cart-routes');
const shopAddressRouter = require('./routes/shop/address-routes');
const shopOrderRouter = require('./routes/shop/order-routes');
const adminOrderRouter = require('./routes/admin/order-routes');
const shopSearchRouter = require('./routes/shop/search-routes');
const shopReviewRouter = require('./routes/shop/review-routes');
const commonFeatureRouter = require('./routes/common/feature-routes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = [
            'https://ecommerce-fullstack-design-1by7.vercel.app',
            'https://ecommerce-fullstack-design-xgez.vercel.app',
            'https://ecommerce-fullstack-design-ashy.vercel.app', // <-- Add this line
            'http://localhost:3000' // For local development
        ];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, origin);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'],
    credentials: true,
    optionsSuccessStatus: 204
}));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/admin/products', adminProductsRouter);
app.use('/api/shop/products', shopProductsRouter);
app.use('/api/shop/cart', shopCartRouter);
app.use('/api/shop/address', shopAddressRouter);
app.use('/api/shop/order', shopOrderRouter);
app.use('/api/admin/orders', adminOrderRouter);
app.use('/api/shop/search', shopSearchRouter);
app.use('/api/shop/review', shopReviewRouter);
app.use('/api/common/feature', commonFeatureRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        activeStatus: true,
        error: false,
        message: "Server is running"
    });
});   

// Global error handler
app.use((err, req, res, next) => {
    console.error('Error occurred:', err.stack);
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({ error: 'CORS policy violation' });
    }
    res.status(500).json({ error: 'Something went wrong!', details: err.message });
});

// Export for Vercel
module.exports = app;