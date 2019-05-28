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