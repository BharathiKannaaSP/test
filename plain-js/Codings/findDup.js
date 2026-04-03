const a = [1, 2, 3, 1, 2, 1]
console.log([...new Set(a)])

const seen = new Set()
const duplicates = new Set()


for (let num of a) {
    if (seen.has(num)) {
        duplicates.add(num)
    } else {
        seen.add(num)
    }
}

console.log(...duplicates)