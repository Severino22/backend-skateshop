const {Article} = require('../models/articles')
const {validationResult} = require('express-validator')

module.exports = {
    async lista (req, res)  {
        const items = await Article.find()
        res.json({items})
    },
    async listaById (req, res)  {
        const item = await Article.findById(req.params.id)
        res.json({item})
    },
    async crear (req, res) {
        try { 
            const mistakes = validationResult(req)
            if (mistakes.isEmpty()) {
                const item = new Article(req.body);
                await item.save();
                res.status(201).json(item); 
            } else {
                res.status(501).json(mistakes);
            }
        } catch (error) {
            res.status(401).json(error);
        }
    },
    async editar (req, res){
        try {
            const mistakes = validationResult(req);
            if (mistakes.isEmpty()) {
                await Article.findByIdAndUpdate(req.params.id,req.body);
                res.status(201).json({msg: "The article was updated correctly id - " + req.params.id})
            } else {
                res.json(mistakes)
            }
            
        } catch (error) {
            res.json(error);
        }
    },
    async eliminar (req, res) {
        await Article.findByIdAndDelete(req.params.id);
        res.json({msg: "The product was removed correctly id - " + req.params.id})
    }
}