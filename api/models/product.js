const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true,
        validate: /[^A-Za-z0-9]+/g
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);