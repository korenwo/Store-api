const mongoose = require('mongoose');

const Product = mongoose.model('Product', {
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : false
    },
    image : {
        type : String,
        required : false
    }
});

module.exports = Product;