const express=require('express')
const { adminLogin, addProduct,getProducts,editProduct, deleteProduct, 
    getSingleProduct, userSignUp, userLogin, addToCart, cartCount, cartItems,
     totalPrice, QuantityIncrement, QuantityDecrement, removeCart,
      addwishlist, wishlistItems, removeWishlist, getUsers, deleteUser } = require('../controllers/logic')



//object creation

const router=new express.Router()


//set path

router.post('/admin/login',adminLogin)
router.post('/admin/add-product',addProduct)
router.get('/products-access',getProducts)
router.put('/product-update/:id',editProduct)
router.delete('/product-delete/:id',deleteProduct)
router.get('/one-product/:id',getSingleProduct)
router.post('/user-signUp',userSignUp)
router.post('/user-login',userLogin)
router.post('/addtocart',addToCart)
router.get('/cart-count/:userId',cartCount)
router.get('/cart-items/:userId',cartItems)
router.get('/price-total/:userId',totalPrice)
router.get('/quantity-update-inc/:_id',QuantityIncrement)
router.get('/quantity-update-dec/:_id',QuantityDecrement)
router.delete('/remove-cart/:_id',removeCart)
router.post('/addtowishlist',addwishlist)
router.get('/wishlist-items/:userId',wishlistItems)
router.delete('/remove-wishlist/:_id',removeWishlist)
router.get('/user-access',getUsers)
router.delete('/user-delete/:_id',deleteUser)














//export router

module.exports=router