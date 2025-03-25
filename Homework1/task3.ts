type Triangle = {
    type : string,
    base : number,
    height : number
}

type Rectangle = {
    type : string,
    width : number,
    height : number
}

type Circle = {
    type : string,
    radius : number
}

function getFigureInfo(figure : Circle | Rectangle | Triangle) : string {
    if(figure.type === "triangle") {
        const area = 0.5 * (triangle.base * triangle.height)
        return `Triangle with base ${triangle.base} and height ${triangle.height} has an area of ${area}`
    }
    if(figure.type === "rectangle") {
        const area = rectangle.width * rectangle.height
        return `Rectangle with width ${rectangle.width} and height ${rectangle.height} has an area of ${area}`
    }
    if(figure.type === "circle") {
        const area = (3.14159 * circle.radius * circle.radius).toFixed(2);
        return `Circle with radius ${circle.radius} has an area of ${area}`
    }

    throw new Error("Unsupported data type");
}


  const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
  const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
  const circle: Circle = { type: "circle", radius: 8 };
 
  console.log(getFigureInfo(triangle));
// Output: " Triangle with base 5 and height 10 has an area of 25" 
  console.log(getFigureInfo(rectangle));
// Output: " Rectangle with width 8 and height 14 has an area of 112" 
  console.log(getFigureInfo(circle));
// Output: " Circle with radius 8 has an area of 201.06"
