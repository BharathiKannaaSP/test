function fibonacci(n) {
    let fib = [0, 1]

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib.slice(0, n)
}

console.log(fibonacci(10))


function recursiveFibonacci(num) {
    if (num <= 1) return num

    return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2)
}

for (let i = 0; i < 10; i++) {
    console.log(recursiveFibonacci(i))
}