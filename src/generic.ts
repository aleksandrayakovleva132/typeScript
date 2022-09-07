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

interface ILength {
    length: number,
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`,
    }
}

// console.log(withCount('Hello typeScript!'));
// console.log(withCount(['I', 'am', 'array']));
// // console.log(withCount(20));
// console.log(withCount({length: 20}));

// ============
// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   return obj[key]
// }
//
// const person = {
//     name: 'Ivan',
//     age: 30,
//     job: 'JavaScript'
// }
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job'));


class Cl
