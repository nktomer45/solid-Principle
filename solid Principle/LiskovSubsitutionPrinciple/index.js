var SquareArea = /** @class */ (function () {
    function SquareArea(side) {
        var _this = this;
        this.getArea = function () {
            return _this.sides * _this.sides;
        };
        this.sides = side;
    }
    return SquareArea;
}());
var RectangleArea = /** @class */ (function () {
    function RectangleArea(width, length) {
        var _this = this;
        this.getArea = function () { return _this.length * _this.width; };
        this.width = width;
        this.length = length;
    }
    return RectangleArea;
}());
var rectangleArea = new RectangleArea(2, 4);
console.log(rectangleArea.getArea());
var square = new SquareArea(8);
console.log(square.getArea());
