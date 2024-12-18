const router = require('express').Router()
const con = require('../db/connection')
const mainCont = require('../controllers/mainControllers')

router.get('/products', mainCont.getProducts)

router.get('/view_product/:id', mainCont.getViewProduct)

router.get('/add_product', mainCont.getAddProduct)
router.post('/add_product', mainCont.postAddProduct)

router.get('/delete_product/:id', mainCont.getDeleteProduct)

router.get('/edit_product/:id', mainCont.getEditProduct)
router.post('/edit_product/:id', mainCont.postEditProduct)


module.exports = router