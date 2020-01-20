
/*
Mark and John are trying to compare their BMI, which is calcuated using this formula:
BMI = mass / height^2 = mass / (height * height).
(mass in KG, height in Metre).

1. Store Mark and John's height and mass in variables.
2. Calculate both their BMI's.
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Marks BMI higher than John's? True").
*/

var markMass = 119;
var markHeight = 190;

var johnMass = 70;
var johnHeight = 160;


var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI);
console.log(johnBMI);

var markHigherBMI = markBMI > johnBMI;
console.log("Does Mark have a higher BMI? " + markHigherBMI);