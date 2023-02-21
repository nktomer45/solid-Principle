interface Animal {
    walk(): void;
    fly(): void;
  }
  
  class Dog1 implements Animal {
    walk() {
      console.log("Walking");
    }
  
    fly() {
      throw new Error("Dogs cannot fly");
    }
  }
  
  class Duck1 implements Animal {
    walk() {
      console.log("Walking");
    }
  
    fly() {
      console.log("Flying");
    }
  }