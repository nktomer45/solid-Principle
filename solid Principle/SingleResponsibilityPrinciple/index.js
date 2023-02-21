"use strict";
exports.__esModule = true;
var log_1 = require("./log");
var CalorieTracker = /** @class */ (function () {
    function CalorieTracker(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalorie = 0;
    }
    CalorieTracker.prototype.trackCalories = function (calorieCount) {
        this.currentCalorie += calorieCount;
        if (this.currentCalorie > this.maxCalories) {
            console.log("sdddfdfjdhf");
            (0, log_1["default"])("Max calories excessed");
        }
        else {
            console.log("dfjfhgffhfh");
        }
    };
    return CalorieTracker;
}());
var calorieTracker = new CalorieTracker(1234);
calorieTracker.trackCalories(2000);
