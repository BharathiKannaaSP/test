class RateLimiter {
    constructor(limit, windowMs) {
        this.limit = limit;
        this.windowMs = windowMs;
        this.requests = new Map();
    }

    isAllowed(userId) {
        const now = Date.now()

        if (!this.requests.has(userId)) {
            this.requests.set(userId, [])
        }
        const timeStamps = this.requests.get(userId)
        console.log(timeStamps)
        
        while (timeStamps.length && now - timeStamps[0] > this.windowMs) {
            timeStamps.shift()
        }

        if (timeStamps.length < this.limit) {
            timeStamps.push(now)
            return true
        }
        return false
    }
}


const ratelimiter = new RateLimiter(3, 5000)

console.log(ratelimiter.isAllowed('user1'))
console.log(ratelimiter.isAllowed('user1'))
console.log(ratelimiter.isAllowed('user1'))
console.log(ratelimiter.isAllowed('user1'))