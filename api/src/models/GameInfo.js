const NodeCache = require('node-cache')

const cache = new NodeCache()
cache.set('game-info', [])
cache.set('id', 0)

module.exports = class GameInfo {
    static list() {
        return cache.get('game-info')
    }

    static create(gameInfo) {
        const gameInfos = cache.get('game-info')
        let id = cache.get('id') + 1
        cache.set('id', id)

        gameInfo['id'] = id

        cache.set('game-info', [...gameInfos, gameInfo])

        return gameInfo
    }
}