// Shallow

// const original = { name: "Bharathi", address: { city: "Erode" } };

// // Shallow copy using spread operator
// const shallow = { ...original };

// shallow.address.city = "Chennai";

// console.log(original.address.city); // "Chennai" ✅ (original affected!)



//Deep

function deepCopy(obj) {

    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }
    let copy = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key])
        }
    }
    return copy
}



function shallowCopy(obj) {
    let copy = { ...obj }
    return copy
}

const original = { name: "Bharathi", address: { city: "Erode" } };
// const clone = deepCopy(original);
const shallowClone = shallowCopy(original)

// clone.address.city = "Chennai";
shallowClone.address.city = "US"


// console.log(original.address.city); // "Erode" ✅
// console.log(clone.address.city);  // Chennai


console.log(original.address.city);  
console.log(shallowClone.address.city);