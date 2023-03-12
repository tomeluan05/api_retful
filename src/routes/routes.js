const router = require('express').Router()
const ProductController = require('../controllers/productsController')

// VERBOS HTTP 
// GET - OBTER DADOS
// POST - ENVIAR / RECEBER DADOS
// PUT - ATUALIZAR DADOS
// DELETE - DELETAR DADOS



router.get('/products', ProductController.get)
// router.post('/products', ProductController.post)
// router.put('/products/:id', ProductController.put)
// router.delete('/products/:id', ProductController.delete)




module.exports = router; 