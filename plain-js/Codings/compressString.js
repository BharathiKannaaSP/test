function compressString(str) {
    let freq = {}

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (freq[char]) {
            freq[char]++
        } else {
            freq[char] = 1
        }
    }

    let result = ''

    for (let key in freq) {
        result += key + freq[key] + ' '
    }

    return result
}

console.log(compressString('aaaaabbbzzzcccc'))