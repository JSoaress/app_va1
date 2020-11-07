const express = require('express')

const GameInfoController = require('./controllers/GameController')

const routes = express.Router()

routes.get('/game/info', GameInfoController.list)

routes.post('/game/info/insert', GameInfoController.store)

module.exports = routes