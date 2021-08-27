const Product = require('../models/product')

class ProductController {

    static async getAll(req, res) {
        try {
            const products = await Product.find();
            res.json(products.map(product => ({
                _id: product._id,
                title: product.title,
                price: product.price,
                image: product.image,
                description: product.description
            })));
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }

    static get (req, res) {
        Product.findById(req.body._id)
            .then(product => res.status(201).send(product))
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            });
    }

    static async create(req, res) {
        try {
            const product = new Product({
                title: req.body.title,
                price: req.body.price,
                image: req.body.image,
                description: req.body.description
            });
            const createdProduct = await product.save();
            res.status(201).send(createdProduct);
        } catch(err) {
            console.log(err);
            res.sendStatus(400);
        }    
    }
    
    static delete (req, res) {
        Product.findOneAndDelete(req.body._id)
            .then(() => res.status(201).send())
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            });
    }

      static async product(req, res) {
        if (productrId === productId) {
            res.sendStatus(400);
            return;
        }
        const product = await Product.findByIdAndUpdate(
            productId,
            {
                $addToSet: {
                    products: productId
                }
            },
            {
                new: true
            } 
        );
        if (!product) {
            res.sendStatus(404);
            return;
        }
        res.send(product);
    }

    static edit (req, res) {
        Product.findByIdAndUpdate(req.body._id, req.body)
            .then(product => res.status(201).send(product))
            .catch(err => {
                console.error(err);
                res.status(400).send(err);
            });
    }
    
}

	

 
    

module.exports = ProductController;
