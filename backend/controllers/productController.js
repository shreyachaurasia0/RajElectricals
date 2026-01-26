import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'

//Function to add product
const addProduct = async (req, res) => {
    try {
        
        const {name , description , price , category , subCategory , bestseller, specifications, features, warranty, brand, deliveryCharge } = req.body

        if(!name || !description || !price || !category || !subCategory) {
            return res.status(400).json({success: false, message: "Please fill all required fields"});
        }

        const image1 =req.files.image1 &&  req.files.image1[0]
        const image2 =req.files.image2 &&  req.files.image2[0]
        const image3 =req.files.image3 &&  req.files.image3[0]
        const image4 =req.files.image4 &&  req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item)=> item != undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'})
                return result.secure_url
            })
        )
        
        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestseller: bestseller === 'true' ? true : false,
            specifications: specifications || '',
            features: features || '',
            brand: brand || '',
            warranty: warranty || '',
            deliveryCharge: deliveryCharge ? Number(deliveryCharge) : 0,
            image:imagesUrl,
            date: Date.now()
        }
        console.log(productData);
        const product = new productModel(productData)
        await product.save()
        res.json({success:true , message:"Product added successfully"})

    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

//function for list product
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find().sort({date:-1})
        res.json({success:true , products})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

// function for remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true , message:"Product removed successfully"})
    }
    catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

//function for single product info
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId)
        res.json({success:true , product})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

// Update product
const updateProduct = async (req, res) => {
    try {
        const { productId, name, description, price, category, subCategory, bestseller, specifications, features, warranty, brand, deliveryCharge } = req.body;

        if (!productId || !name || !description || !price || !category || !subCategory) {
            return res.status(400).json({ success: false, message: "Please fill all required fields" });
        }

        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        let imagesUrl = [...product.image];

        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        const images = [image1, image2, image3, image4].filter((item) => item != undefined);

        if (images.length > 0) {
            imagesUrl = await Promise.all(
                images.map(async (item, index) => {
                    let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                    return result.secure_url;
                })
            );
        }

        const updatedData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestseller: bestseller === 'true' ? true : false,
            specifications: specifications || '',
            features: features || '',
            brand: brand || '',
            warranty: warranty || '',
            deliveryCharge: deliveryCharge ? Number(deliveryCharge) : 0,
            image: images.length > 0 ? imagesUrl : product.image,
        };

        await productModel.findByIdAndUpdate(productId, updatedData);
        res.json({ success: true, message: "Product updated successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export {addProduct , listProduct , removeProduct , singleProduct, updateProduct};