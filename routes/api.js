const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")
const validarID = require('../middleware/validariD')
const {check} = require('express-validator')


router.get('/ver', apiController.lista)
router.get('/ver/:id',validarID ,apiController.listaById)
//metodo http - expresion de la ruta - middleware - callback

router.post('/crear', [
    check('name').not().isEmpty().withMessage('the field name is required').isLength({min:2, max: 30}).withMessage('The name field must have a minimum of 2 characters and a maximum of 30'),
    check('brand').not().isEmpty().withMessage('the field brand is required').isLength({min:3, max: 30}).withMessage('The fiel brand must have a minimum of 3 characters and a maximum of 30'),
    check('price').not().isEmpty().withMessage('the field price is required'),
    check('model').not().isEmpty().withMessage('the field model is required'),
    check('extent').not().isEmpty().withMessage('the field extent is required'),
    check('material').not().isEmpty().withMessage('the field material is required for edit'),
    check('stock').not().isEmpty().withMessage('the field stock is required'),
    check('category').not().isEmpty().withMessage('the field category is required').isLength({min:4, max: 15}).withMessage('The field category must have a minimum of 4 characters and a maximum of 15'),
], apiController.crear)
router.put('/editar/:id' ,validarID ,[
    check('name').not().isEmpty().withMessage('the field name is required for edit').isLength({min:2, max: 30}).withMessage('The field name must have a minimum of 2 characters but a maximum of 30'),
    check('brand').not().isEmpty().withMessage('the field brand is required for edit').isLength({min:3, max: 30}).withMessage('The field brand must have a minimum of 3 characters but a maximum of 30'),
    check('price').not().isEmpty().withMessage('the field price is required for edit'),
    check('model').not().isEmpty().withMessage('the field model is required for edit'),
    check('extent').not().isEmpty().withMessage('the field extent is required for edit'),
    check('material').not().isEmpty().withMessage('the field material is required for edit'),
    check('stock').not().isEmpty().withMessage('the field stock is required for edit'),
    check('category').not().isEmpty().withMessage('the field category is required for edit').isLength({min:4, max: 15}).withMessage('The field category must have a minimum of 4 characters but a maximum of 15'),
],apiController.editar)
router.delete('/borrar/:id',validarID ,apiController.eliminar)


module.exports = router