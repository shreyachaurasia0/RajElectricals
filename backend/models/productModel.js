import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    bestseller: {
        type: Boolean,
    },
    specifications: { type: String }, // pipe-separated "Key: Value | Key2: Value2"
    features: { type: String },       // pipe-separated "Feature1 | Feature2"
    brand: { type: String },
    warranty: { type: String },
    deliveryCharge: { type: Number, default: 0 },
    date: {
        type: Number,
        required: true,
    }
});

const productModel = mongoose.models.product || mongoose.model('product', productSchema);

export default productModel;
