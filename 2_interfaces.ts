interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
}

const rect1: Rect = {
    id: '1',
    size: {
        width: 20,
        height: 30,
    },
    color: '#ccc',
}

const rect2: Rect = {
    id: '2',
    size: {
        width: 10,
        height: 5,
    },
    color: '#ccc',
}

rect2.color = 'black';
// rect2.id = '232'  не сработает так как указано readonly

const rect3 = {} as Rect;
const rect4 = <Rect>{}; // более  тарая запись

// ==================

interface RectWithArea extends Rect {
    getArea: () => number;   // () => number - это тип, который говорит что перед нами ф-я которая возвращает число
}

const rect5: RectWithArea = {
    id: '3',
    size: {
        width: 20,
        height: 20,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

// ==================
interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

// ==================

interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
}
