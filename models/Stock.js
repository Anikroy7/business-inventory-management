
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require('validator');

// schema design
const stockSchema = mongoose.Schema({
    productId: {
        type: ObjectId,
        ref: "Product",
        required: true
    },

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
    price: {
        type: Number,
        required: true,
        min: [0, "Product price should be more than 0"]
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Product quantity should be more than 0"]
    },
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
    },

    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "Status can't be   {VALUE}"
        }
    },

    store: {
        name: {
            type: String,
            trim: true,
            required: [true, "Please provide a store name"],
            lowercase: true,
            enum: {
                values: ["Dhaka", "Chittagong", "Rajshahi", "Sylet", "Barishal", "Rangpur", "Mymensingh"],
                message: "{VALUE} is not a valid name"
            }
        },
        id: {
            type: ObjectId,
            required: true,
            ref: "Store"
        }
    },
    suppliedBy: {
        type: String,
        trim: true,
        required: [true, "Please provide a supplier name"],
        id: {
            type: ObjectId,
            ref: "Supplier"
        }
    }

}, {
    timestamps: true,
})


// mongoose middleware for saving data: pre/post

// ------> pre
stockSchema.pre('save', function (next) {
    console.log('Before saving data');

    if (this.quantity == 0) {
        this.status = "out-of-stock-f"
    }

    next()
})
const Stock = mongoose.model("Stock", stockSchema);

exports = Stock;  