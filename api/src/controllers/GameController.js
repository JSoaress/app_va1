const gameInfoModel = require('../models/GameInfo')

module.exports = {
    list(req, res) {

        return res.json(gameInfoModel.list())
    },

    store(req, res) {
        const gameInfo = req.body

        return res.json(gameInfoModel.create(gameInfo))
    }
}