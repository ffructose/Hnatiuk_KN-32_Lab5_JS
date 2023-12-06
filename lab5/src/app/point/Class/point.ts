export class Point {
    x: number;
    y: number;
    belong: boolean;
    constructor(x: number, y: number, b: boolean) {
        this.x = x;
        this.y = y;
        this.belong = b;
    }
    getColor(b: boolean): string {
        return b ? 'darkgreen' : 'darkred';
    }
}