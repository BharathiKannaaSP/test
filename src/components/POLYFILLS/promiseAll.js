Promise.myPromiseAll = function (promises) {
    return new Promise((resolve, reject) => {
        let results = []
        let completed = 0

        if (promises.length === 0) {
            return resolve([])
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value
                    completed++;

                    if (promises.length === completed) {
                        resolve(results)
                    }
                }).catch(reject)
        });
    })
}

const p1 = Promise.resolve(10)
const p2 = new Promise(res => setTimeout(() => res(20), 500))
const p3 = 30

Promise.myPromiseAll([p1, p2, p3]).then(console.log)