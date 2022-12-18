const cache = require('../cache/cache');

class Cache {
    constructor() {}

    static updateCacheByKey(key, data) {
        console.info(`Adding ${key} to cache...`);
        return cache.set(key, data, 10000);
    }

    static cachePresentByKey(key) {
        return !!cache.get(key);
    }

    static getCacheByKey(key) {
        console.info(`Retrieving ${key} from cache...`);
        return cache.get(key);
    }

    static clearCacheByKey(key) {
        console.info(`Clearing cache for ${key}...`);
        cache.del(key);
    }
}

module.exports = Cache;
