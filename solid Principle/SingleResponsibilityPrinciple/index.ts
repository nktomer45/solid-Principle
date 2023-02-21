import Logger from "./log";

class CalorieTracker {
    public maxCalories: any;
    public currentCalorie: any;
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalorie = 0;
    }
    trackCalories(calorieCount) {
        this.currentCalorie += calorieCount;
        if (this.currentCalorie > this.maxCalories) {
            Logger("Max calories excessed")
        }else{
            Logger("fittest person")
            
        }
    }
}

const calorieTracker = new CalorieTracker(1234)
calorieTracker.trackCalories(2000)