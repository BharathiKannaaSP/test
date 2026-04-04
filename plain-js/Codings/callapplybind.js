// function greet(city) {
//     console.log(`Hello ${this.name} from ${city}`);
// }

import { domainToUnicode } from "url"

// const user = { name: "BK" };

// greet.call(user, "Chennai");
// greet.apply(user, ['Chennai'])
// const bound = greet.bind(user, 'Delhi')
// bound()

// Function.prototype.myCall = function (context, ...args) {
//     context = context || globalThis

//     const fn = Symbol()
//     context[fn] = this

//     const result = context[fn](...args)

//     delete context[fn]

//     return result
// }

// Function.prototype.myApply = function (context, args = []) {
//     context = context || globalThis

//     const fn = Symbol()
//     context[fn] = this

//     const result = context[fn](...args)

//     delete context[fn]
//     return result
// }

// Function.prototype.myBind = function (context, ...args1) {
//     const fn = this
//     return function (...args2) {
//         return fn.apply(context, [...args1, ...args2])
//     }
// }

// greet.myCall(user, "Chennai");
// greet.myApply(user, ["Chennai"]);
// const myBound = greet.myBind(user, "Delhi");
// myBound();


Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis

    const fn = Symbol()
    context[fn] = this

    const result = context[fn](...args)

    delete context[fn]

    return result

}

function greet(city) {
    console.log('hello' + this.name + city)
}

const user = { name: 'Bk' }

greet.myCall(user, 'Delhi')


Function.prototype.myBind = function (context, ...args1) {
    const fn = this
    return function (...args2) {
        return fn.apply(context, [...args1, ...args2])
    }
}

const bound = greet.myBind(user, 'Kerala')
bound()

Function.prototype.myApply = function (context, args = []) {
    context = context || globalThis

    const fn = Symbol()
    context[fn] = this

    const result = context[fn](...args)
    delete context[fn]
    return result
}

greet.myApply(user, ['Bangalore'])