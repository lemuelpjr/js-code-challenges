/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height;

2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method;

3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

/* SOLUTION

var john = {
  fullName: 'John Doe',
  mass: 78, // kg
  height: 1.8, // meters
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

var mark = {
  fullName: 'Mark Smith',
  mass: 84, // kg
  height: 1.75, // meters
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName + ' has the highest BMI: ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has the highest BMI: ' + mark.bmi);
} else {
  console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI.');
}
*/