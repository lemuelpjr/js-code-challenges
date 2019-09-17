/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team;

2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output;

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