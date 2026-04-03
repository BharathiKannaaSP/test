// function search(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i; // return index immediately
//         }
//     }
//     return -1; // if not found
// }

// console.log(search([1, 2, 3], 3)); // 2
// console.log(search([1, 2, 3], 5)); // -1


function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2) // 2
        if (arr[mid] === target) return mid
        else if (arr[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 5)); 
