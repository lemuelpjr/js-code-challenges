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

/* SOLUTION

var restaurantMeal = {
  bills: [124, 48, 268, 180, 42],
  // method to calculate the tips
  tipCalc: function() {
    this.tips = [];
    this.finalCheks = [];

    for (var i = 0; i < this.bills.length; i++) {
      var bill = this.bills[i];
      var percentage;

      // calculate tip percentage for each value
      if (bill < 50) {
        // tip is 20% if bill is less than $50
        percentage = 0.2;
      } else if (bill >= 50 && bill <= 200) {
        // tip is 15% if bill is between $50 and $200
        percentage = 0.15;
      } else {
        // tip is 10% if bill is more than $200
        percentage = 0.1;
      }

      // add tips to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalCheks[i] = bill + bill * percentage;
    }
  }
};

restaurantMeal.tipCalc();

console.log(restaurantMeal.tips);
console.log(restaurantMeal.finalCheks);
*/

/*****************************
* CODING CHALLENGE 5.2
*/

/*
Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

/* SOLUTION */

// function averageCalc(tips) {
//   var sum = 0;

//   for (var i = 0; i < tips.length; i++) {
//     sum += tips[i];
//   }

//   return sum / tips.length;
// }

// // John's  holiday meals
// var johnMeals = {
//   bills: [124, 48, 268, 180, 42],
//   // method to calculate the tips
//   tipCalc: function () {
//     this.tips = [];

//     for (var i = 0; i < this.bills.length; i++) {
//       var bill = this.bills[i];
//       var percentage;

//       // calculate tip percentage for each value
//       if (bill < 50) {
//         // tip is 20% if bill is less than $50
//         percentage = 0.2;
//       } else if (bill >= 50 && bill <= 200) {
//         // tip is 15% if bill is between $50 and $200
//         percentage = 0.15;
//       } else {
//         // tip is 10% if bill is more than $200
//         percentage = 0.1;
//       }

//       // add tips to the array
//       this.tips[i] = bill * percentage;
//     }
//   }
// };

// // Mark's  holiday meals
// var markMeals = {
//   bills: [77, 375, 110, 45],
//   // method to calculate the tips
//   tipCalc: function () {
//     this.tips = [];

//     for (var i = 0; i < this.bills.length; i++) {
//       var bill = this.bills[i];
//       var percentage;

//       // calculate tip percentage for each value
//       if (bill < 100) {
//         // tip is 20% if bill is less than $100
//         percentage = 0.2;
//       } else if (bill >= 100 && bill <= 300) {
//         // tip is 10% if bill is between $100 and $300
//         percentage = 0.1;
//       } else {
//         // tip is 25% if bill is more than $300
//         percentage = 0.25;
//       }

//       // add tips to the array
//       this.tips[i] = bill * percentage;
//     }
//   }
// };

// johnMeals.tipCalc();
// markMeals.tipCalc();
// johnMeals.average = averageCalc(johnMeals.tips);
// markMeals.average = averageCalc(markMeals.tips);

// console.log(johnMeals, markMeals);

// if (johnMeals.average > markMeals.average) {
//   console.log('John\'s family paid the heighst tip on average with a total of $' + johnMeals.average);
// } else if (johnMeals.average < markMeals.average) {
//   console.log('Mark\'s family paid the heighst tip on average with a total of $' + markMeals.average);
// } else {
//   console.log('Both familis paid the same tip on average with a total of $' + johnMeals.average);
// }

/*****************************
* CODING CHALLENGE 6.1
*/

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// Question constructor
function Question(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

// Display questions on console
function displayQuestions() {
  // code here
}

// Question strings
var firstQuestion = '1 - Which one of these was a painter?';
var firstAnswers = ['1 - John Lenon', '2 - Van Gogh'];

var secondQuestion = '2 - Which country is not from Europe?';
var secondAnswers = ['1 - Colombia', '2 - France'];

// Question instances
var question1 = new Question(firstQuestion, firstAnswers, 2);
var question2 = new Question(secondQuestion, secondAnswers, 1);

// Collectio of all questions
var allQuestions = [question1, question2];

// console.log(question1);
// console.log(question2);
console.log(allQuestions);