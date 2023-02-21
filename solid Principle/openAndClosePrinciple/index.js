"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * Math.PI;
    };
    return Circle;
}());
function CalculateAreasOfMultipleShapes(shapes) {
    return shapes.reduce(function (calculatedArea, shape) {
        return calculatedArea + shape.getArea();
    }, 0);
}
var shape = [new Circle(34), new Circle(90), new Rectangle(89, 90)];
console.log(CalculateAreasOfMultipleShapes(shape));
