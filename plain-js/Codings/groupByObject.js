const array = [
    {
        name: 'Varun',
        place: 'Chennai'
    },
    {
        name: 'Arun',
        place: 'Chennai'
    },
    {
        name: 'Bharathi',
        place: 'Abq'
    },

]

const obj = {}

for (let i = 0; i < array.length; i++) {
    let place = array[i].place
    let name = array[i].name
    if (!obj[place]) {
        obj[place] = []
    }
    obj[place].push(name)
}

const sorted = Object.fromEntries(
    Object.entries(obj)
        .map(([place, names]) => [place, names
            .sort((a, b) => a[0].localeCompare(b[0]))]))


console.log(sorted)