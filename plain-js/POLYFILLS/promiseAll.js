Promise.myPromiseAll = function(promises) {
    return new Promise((resolve, reject) => {
        const result = []
        let completed = 0
        
        if(promises.length === 0) {
            resolve([])
        }
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((value) => {
                result[index] = value
                completed++
            if(completed === promises.length) {
                resolve(result)
            }
            }).catch(reject)
        })
    })
}

const p1 = Promise.reject(2)
const p2 = new Promise(res => setTimeout(() => res(20), 4000))
const p3 = Promise.reject(3)
// Promise.race([p1,p2,p3]).then(console.log)

Promise.allSettled([p1,p2,p3]).then(console.log)
// Promise.any([p1,p2,p3]).then(console.log)
// Promise.myPromiseAll([p1,p2,p3]).then(console.log)


// Promise Methods Cheat Sheet
// Feature	Promise.all	Promise.race	Promise.any	Promise.allSettled
// Waits for all?	✅ Yes	❌ No	❌ No	✅ Yes
// Returns first result?	❌	✅ (first settled)	✅ (first fulfilled)	❌
// Handles rejection	❌ Fails fast	✅ First reject wins	❌ Ignores rejects	✅ Returns all
// When does it resolve?	All resolved	First settle	First success	After all settle
// When does it reject?	First reject	First reject	If ALL reject	❌ Never rejects
// Return type	Array of values	Single value	Single value	Array of objects



// all → ❌ fails fast
// race → ⚡ first settle wins
// any → 🎯 first success wins
// allSettled → 📊 never fails
