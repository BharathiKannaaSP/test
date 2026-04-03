function throttle(fn, delay) {
    let timeoutId = null;

    return function (...args) {
        if (timeoutId) return

        timeoutId = setTimeout(() => {
            fn.apply(this, args)
            timeoutId = null
        }, delay)
    }
}

const onSearch = (value) => {
    console.log("Searching...", value)
}

const throttleSearch = throttle(onSearch, 4000)

throttleSearch('Hello')
throttleSearch('Hello 2')


