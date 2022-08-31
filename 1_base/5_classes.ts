class Typescript {
    version: string;

    constructor(version: string) {
        this.version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {}
}

// =======
// Модификаторы

class Animal {
    protected voice: string = ''; // доступно в наследуемом классе
    public color: string = 'black'; // доступно везде

    private go() {
        console.log('Go'); // доступен только здесь
    }

    constructor() {
        this.go();
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('MAAOO!');
console.log(cat.color);

// ===========

abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }

    info(): string {
        return 'This is Info';
    }
}
