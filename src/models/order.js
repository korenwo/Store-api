const mongoose = require('mongoose');

const Orders = mongoose.model('Order', {
    order : {
        type : Array,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        require : true
    }
});

module.exports = Orders;