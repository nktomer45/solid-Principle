interface Shape {
    getArea: () => number;
  }
  
  interface Rectangle extends Shape {
    width: number;
    length: number;
  }
  
  interface Square extends Shape {
    sides: number;
  }


  class SquareArea implements Square{
    sides: number;
    constructor(side){
        this.sides=side
    }
    getArea= () =>{
        return this.sides * this.sides
    }
  }

  class RectangleArea implements Rectangle{
    width: number;
    length:number
    constructor(width,length){
        this.width=width;
        this.length=length
    }
    getArea =() => {return this.length*this.width}
  }


  const rectangleArea= new RectangleArea(2,4);
  console.log(rectangleArea.getArea());

  const square=new SquareArea(8)
  console.log(square.getArea());
  
