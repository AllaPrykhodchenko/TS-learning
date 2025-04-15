class GeometricFigure {
    getArea() : number {
        return 0;
    };
    toString(): string {
        return Object.getPrototypeOf(this).constructor.name;
    }
 }

 class MyTriangle extends GeometricFigure {
    base : number;
    height : number;

    constructor(base : number, height : number) {
        super();
        this.base = base;
        this.height = height;
    }

    override getArea(): number {
        return 0.5 * (this.base * this.height);
    }
 }

 class Square extends GeometricFigure {
    side : number;

    constructor(side : number) {
        super();
        this.side = side;
    }

    override getArea(): number {
        return this.side * this.side;
    }
 }

 class MyCircle extends GeometricFigure {
    radius : number;

    constructor(radius : number) {
        super();
        this.radius = radius;
    }

    override getArea(): number {
        return 3.14159 * this.radius * this.radius;
    }
 }

 function handleFigures(figures: GeometricFigure[]): number {
    return figures.reduce((total, figure) => {
        if (figure instanceof GeometricFigure) {
            const area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
            return total + area;
        }
        return total;
    }, 0);
}

const figures = [
    new MyTriangle(4, 5),
    new Square(7),
    new MyCircle(5)
];

console.log(handleFigures(figures));