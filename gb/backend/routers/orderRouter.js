import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuthorized } from '../utils.js';

const orderRouter = express.Router();

orderRouter.post('/', isAuthorized, expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).send({message: 'Cart is empty'});
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id
        })

        const createdOrder = await order.save();
        res.status(201).send({message: 'New order created', order: createdOrder});
    }
}));

orderRouter.get('/:id', isAuthorized, expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        res.send(order);
    } else {
        res.status(404).send({message: 'Order not found'});
    }
}));

orderRouter.put('/:id/pay', isAuthorized, expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {id: req.body.id, status: req.body.status, updateTime: req.body.updateTime, email: req.body.email};

        const updatedOrder = await order.save();
        res.send({message: 'Order Paid', order: updatedOrder});
    } else {
        res.status(404).send({message: 'Order not found'});
    }
}))

export default orderRouter;