const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a category name"],
        trim: true,
        lowercase: true,
        unique: true
    },
    description: String,
    imageUrl: {
        type: String,
        validate: [validator.isURL, "Please provide a valid URL"]
    }
}, {
    timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

exports = Category;