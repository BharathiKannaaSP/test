const Person = {
    greet(name) {
        console.log('Hello' + name)
    }
}

const child = Object.create(Person)
child.greet('JK')
