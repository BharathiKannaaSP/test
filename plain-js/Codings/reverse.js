function reverseRec (str) {
     if (str === '') return ''  
    return reverseRec(str.substr(1)) + str[0]
}

console.log(reverseRec('hello'))


let a = 'hello'
let reversed = ''

for (let i = a.length - 1; i >= 0; i--) {
  reversed += a[i]
}

console.log(reversed) // "olleh"


function reverseString(str) {
  let arr = str.split('')
  let left = 0, right = arr.length - 1

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]  // swap
    left++
    right--
  }

  return arr.join('')
}

console.log(reverseString('world')) // "dlrow"
