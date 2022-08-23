interface Person {
    name: string,
    age: number,
}

type PersonKeys = keyof Person;

let key: PersonKeys = 'name';
key = 'age';

// key = 'job';  --- так не сработает

type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date,
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>; // name, email
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

let u1: UserKeysNoMeta = 'name';
// u1 = '_id'  - не сработает
