function flat(arr, depth) {
    let result = []

    function flatten(input, currentDepth) {
        for (let i = 0; i < input.length; i++) {
            if (Array.isArray(input[i]) && currentDepth > 0) {
                flatten(input[i], currentDepth - 1)
            } else {
                result.push(input[i])
            }
        }

    }
    flatten(arr, depth)
    return result
}


const array = [1, 2, 3, [4, 5, [6]], [7, 8, [9, [10]]]]

console.log(flat(array, 1))