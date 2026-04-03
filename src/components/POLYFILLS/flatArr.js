if (!Array.prototype.flatArr) {
    Array.prototype.flatArr = function (depth) {
        let result = []

        for (let i = 0; i < this.length; i++) {
            if (Array.isArray(this[i]) && depth > 0) {
                result = result.concat(this[i], depth - 1)
            } else {
                result.push(this[i])
            }
        }

        return result
    }
}

console.log([1, 2, [3, 4, 5, [6]], 7, 8].flatArr(3));