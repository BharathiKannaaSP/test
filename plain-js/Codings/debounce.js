const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

const search = debounce((val) => {
    console.log('Searching...' + val)
}, 2000)

search('hello')
search('hello1')
search('hello2')
search('hello3')
search('hello4')
search('hello5')