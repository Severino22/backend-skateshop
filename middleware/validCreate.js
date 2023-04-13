const {check} = require('express-validator');


const validCreate = [
    check('name').not().isEmpty().withMessage('the field name is required').isLength({min:2, max: 30}).withMessage('The name field must have a minimum of 2 characters and a maximum of 30'),
    check('brand').not().isEmpty().withMessage('the field brand is required').isLength({min:3, max: 30}).withMessage('The fiel brand must have a minimum of 3 characters and a maximum of 30'),
    check('price').not().isEmpty().withMessage('the field price is required'),
    check('model').not().isEmpty().withMessage('the field model is required'),
    check('extent').not().isEmpty().withMessage('the field extent is required'),
    check('material').not().isEmpty().withMessage('the field material is required for edit'),
    check('stock').not().isEmpty().withMessage('the field stock is required'),
    check('category').not().isEmpty().withMessage('the field category is required').isLength({min:4, max: 15}).withMessage('The field category must have a minimum of 4 characters and a maximum of 15'),
];

module.exports = { validCreate };