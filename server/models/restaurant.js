const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost:27017/dbmeanbelt', { useNewUrlParser: true })
mongoose.set('useCreateIndex', true);

const RestaurantSchema = new mongoose.Schema({
    name: { 
        type: String, unique: true,
        required: [true, "Restaurant Name Required"], 
        minlength: [3, "Name Characters Max 3"] 
    },
    cuisine: { 
        type: String, unique: true,
        required: [true, "Cuisine Type Required"], 
        minlength: [3, "Cuisine Name Characters Max 3"]
    },
    reviews: { 
        type: Array, 
        required: true,
        default: [] 
    }},  { timestamps: true }
);
mongoose.model('Restaurant', RestaurantSchema)

{timestamps: true}

RestaurantSchema.plugin(uniqueValidator, { message: "Restaurant Must Be Unique." });

const Restaurant = mongoose.model('Restaurant', RestaurantSchema); 
module.exports = Restaurant;
