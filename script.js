/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

/* SOLUTION

var bmiJohn, bmiMark, heightJohn, heightMark, massJohn, massMark;

heightJohn = 180; // centimeters
massJohn = 70; // kilograms

heightMark = 170; // centimeters
massMark = 85; // kilograms

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

if (bmiMark > bmiJohn) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).
*/

/* SOLUTION 

var teamJohnAvgScore, teamMarkAvgScore;

teamJohnAvgScore = (89 + 120 + 103) / 3;
teamMarkAvgScore = (116 + 94 + 123) / 3;

if (teamJohnAvgScore === teamMarkAvgScore) {
  console.log('It\'s a draw and both teams scored ' + teamJohnAvgScore + ' points!');
} else if (teamJohnAvgScore > teamMarkAvgScore) {
  console.log('John\'s team wins and scored ' + teamJohnAvgScore + ' points!');
} else {
  console.log('Mark\'s team wins and scored ' + teamMarkAvgScore + ' points!');
}
*/

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

/* SOLUTION

function tipCalculator(bill) {
  var tip;

  if (bill < 50) {
    tip = bill * 0.2;
  } else if (bill >= 50 && bill <= 200) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.1;
  }

  return tip;
}

var tips = [], finalCheck = [];

tips[0] = tipCalculator(124);
tips[1] = tipCalculator(48);
tips[2] = tipCalculator(268);

finalCheck[0] = 124 + tips[0];
finalCheck[1] = 48 + tips[1];
finalCheck[2] = 268 + tips[2];

console.log(tips, finalCheck);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
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

/*****************************
* CODING CHALLENGE 5.1
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
*/