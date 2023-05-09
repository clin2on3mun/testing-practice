class SimpleCalculator {
    constructor(num1, num2){
       this.num1 = num1;
       this.num2 = num2
    }

    add(num1, num2){
        return num1 + num2;
    }
    subtract(num1, num2){
        return num1 - num2;
    }
    division(num1, num2){
        return num1 / num2;
    }
    multiplication(num1, num2){
        return num1 * num2;
    }
     
}

let arthimetic = new SimpleCalculator()
module.exports = arthimetic;