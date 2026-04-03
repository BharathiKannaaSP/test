// function longestCommonString(str1, str2) {
//     const map = {};
//     let result = ''

//     for (let i = 0; i < str2.length; i++) {
//         map[str2[i]] = true
//     }

//     const added = {}
//     for (let i = 0; i < str1.length; i++) {
//         let char = str1[i]

//         if (map[char] && !added[char]) {
//             result += char
//             added[char] = true
//         }
//     }

//     return result
// }

// console.log(longestCommonString('Anthology', 'Anthology USA'))


// const commonChars = (a, b) => [...new Set(a)].filter(c => b.includes(c)).join('');

// console.log(commonChars('Anthology', 'Anthology USA'))


function longestCommonString(str1, str2) {
    let result = ''
    for (let i = 0; i < str1.length; i++) {
        let found = false
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                found = true
                break
            }
        }
        
        if (found) {
            result += str1[i]
        }
    }
    return result
}

console.log(longestCommonString('Anthology', 'Anthology USA'))
