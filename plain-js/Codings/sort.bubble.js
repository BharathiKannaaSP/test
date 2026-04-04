// function bubbleSort(arr) {
//     let swapped;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             swapped = false
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//                 swapped = true
//             }
//         }
//         if (!swapped) break
//     }
//     return arr
// }

// console.log(bubbleSort([1, 2, 5, 3, 1]))


// function peakElement(arr) {
//     let left = 0
//     let right = arr.length - 1

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)

//         if (arr[mid] < arr[mid + 1]) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return arr[left]
// }

// console.log(peakElement([1, 2, 4, 5, 2]))

// function binarySearch(arr, target) {
//     let left = 0
//     let right = arr.length - 1

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)

//         if (arr[mid] === target) return mid
//         else if (arr[mid] < target) left = mid + 1
//         else right = mid - 1
//     }

//     return -1
// }

// console.log(binarySearch([1, 2, 3, 10, 20, 40], 10))

// function fillZero(arr) {
//     let insertPos = arr.length - 1

//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] !== 0) {
//             arr[insertPos] = arr[i]
//             insertPos--
//         }
//     }

//     for (let i = 0; i <= insertPos; i++) {
//         arr[i] = 0
//     }

//     return arr
// }

// console.log(fillZero([1, 2, 3, 0, 4, 0, 10]))