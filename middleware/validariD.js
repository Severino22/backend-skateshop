const { Article } = require('../models/articles')
module.exports = validarID = async (req, res, next ) => {
    try {
        const item = await Article.findById(req.params.id)
        if (item !== null) {
            next();
        } else {
            return res.status(502).json({msg: "The id is incorrect"})
        }
    } catch (error) {
        res.status(502).json(error)
    }
}  
                                                                                         