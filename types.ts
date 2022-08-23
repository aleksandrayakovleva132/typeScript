const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TS';

const numberArray: number[] = [1, 1, 2,  3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2,  3, 5, 8, 13];

const words: string[] = ['Hello', 'TS'];

// Tuple

const contact: [string, number] = ['Aleksandra', 123];

// Any

let variable: any = 42;

variable = 'New string';
variable = [];

// ===

function sayMyName(name: string): void {   // void означает что ф-я ничего нам не вернет
    console.log(name);
}

sayMyName('Саша');

// Never

function throwError(message: string):never {
       throw new Error(message);
}

function infinite() {
    while (true) {

    }
}

// Type

type Login = string;
const login: Login = 'admin';
// const login2: Login = 1111;  - не сработает

type ID = string | number;
const id1: ID = 1234;
const id12: ID = '12';
// const id13: ID = true; - не сработает

type SomeType = string | null | undefined; // обычно не использьют null или undefined так как есть void;


















