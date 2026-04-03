
function shallowCopy (obj) {
    let copy = {}

    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            copy[key] = obj[key]
        }
    }
    return copy
}
let a = {name: "Bharathi", age: 25}
const b = shallowCopy(a)
b.name = 'Kannaa'
console.log(a.name)