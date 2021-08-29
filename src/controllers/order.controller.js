const Order = require('../models/order')
const mongoose= require('mongoose');

class OrderController {

    static async getAll(req, res) {
        try {
            const orders = await Order.find();
            res.json(orders.map(order => ({
                _id: order._id,
                price: order.price,
                order: order.order,
                date : order.date
            })));
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }

    static async create(req, res) {
        try {
            const order = new Order({
                order: req.body.order,
                price: req.body.price, 
                date: req.body.date
            });
            const createdOrder = await order.save();
            res.status(201).send(createdOrder);
        } catch(err) {
            console.log(err);
            res.sendStatus(400);
        }    
    }
    
    
}

module.exports = OrderController;	

 
    


