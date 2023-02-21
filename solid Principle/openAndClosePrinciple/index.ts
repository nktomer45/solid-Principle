
import { Shape } from "./interface";
class Rectangle implements Shape {
    public width: number;
    public height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    public getArea() {
      return this.width * this.height;
    }
  }

  class Circle implements Shape {
    public radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
    public getArea() {
      return this.radius * Math.PI;
    }
  }


function CalculateAreasOfMultipleShapes(
    shapes: Shape[]
  ) {
    return shapes.reduce(
      (calculatedArea, shape) => {
        return calculatedArea + shape.getArea();
      },
      0
    );
  }
let shape=[new Circle(34),new Circle(90),new Rectangle(89,90)];
console.log(CalculateAreasOfMultipleShapes(shape));
