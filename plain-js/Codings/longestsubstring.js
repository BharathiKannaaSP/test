function longestSubString(str) {
    if (!str) return

    let set = new Set()
    let left = 0, maxSub = ''

    for (let right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[right])
            left++
        }
        set.add(str[right])
        if (right - left + 1 > maxSub.length) {
            maxSub = str.slice(left, right + 1)
        }
    }
    return maxSub
}

console.log(longestSubString('abcabcd'))
console.log(longestSubString('bbbbbbbbbb'))