//create model

//import mongoose

const mongoose=require('mongoose')


// define schema-fields and values of model(collections)

const adminSchema=new mongoose.Schema({

uname:String,
psw:String


})

//create model--collection name

const admins=new mongoose.model("admins",adminSchema)

//create schema for admin-add-products

const productSchema=new mongoose.Schema({

    pname:String,
    description:String,
    price:Number,
    image:String,
    rating:Number,
    count:Number




})
//model create for add-product

const products=new mongoose.model("products",productSchema)

//user schema

const userSchema=new mongoose.Schema({

    email:String,
    psw:String



})
//model for user

const users=new mongoose.model("users",userSchema)

//schema for cart

const cartSchema=new mongoose.Schema({

    userId:String,
    pId:String,
    pname:String,
    description:String,
    price:Number,
    image:String,
    rating:Number,
    quantity:Number,
    totalPrice:Number




})

const carts=new mongoose.model("carts",cartSchema)

//wishlist
const wishListSchema=new mongoose.Schema({

    userId:String,
    pId:String,
    pname:String,
    description:String,
    price:Number,
    image:String,
    rating:Number,
    




})

const wishlists=new mongoose.model("wishlists",wishListSchema)






//export model to import in another files//export add-product

module.exports={admins,products,users,carts,wishlists}