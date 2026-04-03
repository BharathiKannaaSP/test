function frequencyChar(str) {
    let freq = {}

    for (let i = 0; i < str.length; i++) {
        freq[str[i]] = (freq[str[i]] || 0) + 1
    }


    let sort = Object.entries(freq).sort((a, b) => b[1] - a[1])

    let result = {}

    for (let [key, value] of sort) {
        result[key] = value
    }

    return result
}

console.log(frequencyChar('hello000'))