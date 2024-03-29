import { Point } from "./point";
export class PointList {
    p: Point[] = [];
    private Belongs(x: number, y: number, r: number): boolean {
        if (x == 0 && y == 0) return true;
        else if (x <= 0 && y >= 0) {
            if (x >= -r && y <= r) return true;
            else return false;
        }
        else if (x >= 0 && y >= 0) {
            if (Math.sqrt(x * x + y * y) <= r) {
                return true;
            } else return false;
        }
        else if (x >= 0 && y <= 0) {
            if (y >= -r/2 && x <= r/2 + y) return true;
            else return false;
        }
        else return false;

    }

    addPoint(x: number, y: number, r: number) {

        let b = this.Belongs(x, y, r);
        let p = new Point(x, y, b);
        this.p.push(p);
    }
}