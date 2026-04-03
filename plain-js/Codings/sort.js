// function sorting(arr) {
//     let swapped = false
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 swapped = true
//             }
//         }
//         if(!swapped) break
//     }
//     return arr
// }

// console.log(sorting([1,3,4,2,10, -1, 0]))



const a = [3, 4, 1, 10]

let b = a.sort(function (a, b) {
    return a - b
})

console.log(b)