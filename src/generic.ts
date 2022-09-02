// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi'];

// const promise = new Promise<number>( resolve => {
//     setTimeout(() => {
//         resolve(44)
//     }, 2000)
// })
//
// promise.then(data => {
//     console.log(data.toFixed());
// })

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Sasha'}, {age: 32})
const merged2 = mergeObjects({model: 'Ford'}, {year: 2010})
// const merged3 = mergeObjects({a: 1}, 'bbb');

console.log(merged.age);
console.log(merged2.year)

// ============


function withCount<T>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`,
    }
}
