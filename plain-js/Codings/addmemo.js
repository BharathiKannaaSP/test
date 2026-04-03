function memoizeAdd(fn) {
    let cache = new Map()
    return function (...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            console.log('Coming from cache')
            return cache.get(key)
        }
        const result = fn(...args)
        cache.set(key, result)
        return result
    }
}


const add = (a, b) => a + b;
const memoize = memoizeAdd(add)

console.log(memoize(2, 3))
console.log(memoize(2, 3))
