const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb://localhost:27017/dbmeanbelt', { useNewUrlParser: true })
mongoose.set('useCreateIndex', true);

const ReviewSchema = new mongoose.Schema({
    restaurantID: {
        type: String, unique: true,
    },
    name: { 
        type: String, unique: true,
        required: [true, "Name Required"], 
        minlength: [3, "Name Max 3 Characters"]  
    },
    comment: { 
        type: String, unique: true,
        required: [true, "Comment Required"], 
        minlength: [3, "Comments Max 3 Characters."]  
    },
    stars: { 
        type: Number, 
        required: [true, "Review Rating Required"], 
        min: [1, "A Review Rating of 1- 5 Must Be Selected"], 
        max: [5, "A Review Rating of 1- 5 Must Be Selected"] },
    },  { timestamps: true }
);

ReviewSchema.plugin(uniqueValidator, { message: "Review Must Be Unique." });

const Review = mongoose.model('Review', ReviewSchema); 
module.exports = Review;
