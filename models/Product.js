
const mongoose = require("mongoose");
const validator = require('validator');

// schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name of this product'],
        trim: true,
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [30, "Name is too long"],
        lowercase: true,
        unique: [true, "Product name must be unique"]
    },
    description: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ['pcs', 'kg', 'ltr', "bag"],
            message: "Unit value can't be {VALUE} must be kg/lg/pcs/bag"
        }
    },

    imageURLs: [{
        type: String,
        validate: {
            validator: (value) => {
                if (!Array.isArray(value)) {
                    return false;
                }
                let isValid = true;
                value.forEach(url => {
                    if (!validator.isURL(url)) {
                        isValid = false;
                    }
                });
                return isValid;
            }
        },
        message: "Please provide valid image url"
    }],

    category: {
        type: String,
        required: ture,
    },
    brand: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: ObjectId,
            ref: "Brand",
            required: true
        }
    }

}, {
    timestamps: true,
})


// mongoose middleware for saving data: pre/post

// ------> pre
productSchema.pre('save', function (next) {
    console.log('Before saving data');

    if (this.quantity == 0) {
        this.status = "out-of-stock-f"
    }

    next()
})
const Product = mongoose.model("Product", productSchema);

exports = Product;  