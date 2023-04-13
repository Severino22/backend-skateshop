const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")
const validarID = require('../middleware/validariD')
const {validCreate} = require('../middleware/validCreate')
const {validEdit} = require('../middleware/validEdit')


router.get('/ver', apiController.lista)
router.get('/ver/:id',validarID ,apiController.listaById)


router.post('/crear', validCreate, apiController.crear)
router.put('/editar/:id', validarID, validEdit, apiController.editar)
router.delete('/borrar/:id',validarID ,apiController.eliminar)


module.exports = router