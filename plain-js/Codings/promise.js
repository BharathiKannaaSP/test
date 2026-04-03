const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true
        if (success) resolve('Data success')
        else reject('Data failed')
    }, 2000)
});
// Handle success with then(), errors with catch()
promise
    .then((data) => console.log(data))
    .catch((err) => console.log(err));