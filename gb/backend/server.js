import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import process from 'process';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb://127.0.0.1:27017/gb");

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
    res.send('ASUuqgnS5xKjWmh6fv-EfesNzdTk4JaGGCk4UOVlGc_JbB3o16VDJO5_Kytbx0G9bp5gC-LRW_R2p9b6') // problem with process.evn.{client_id}
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
});