interface AnimalCanWalk {
    walk(): void;
  }
  
  interface AnimalCanFly {
    fly(): void;
  }
  
  class Dog implements AnimalCanWalk {
    walk() {
      console.log("Walking");
    }
  }
  
  class Duck implements AnimalCanWalk, AnimalCanFly {
    walk() {
      console.log("Walking");
    }
  
    fly() {
      console.log("Flying");
    }
  }