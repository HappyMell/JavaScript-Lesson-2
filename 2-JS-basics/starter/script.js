/*************************************************************
Variables and data types
*/

/*
var firstName = "Mellisa";
console.log(firstName);

var lastName = "Madrid";
var age = 29;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
// Variable naming rules
job = "Student";
console.log(job);

/***************************************************************
 * Variale mutation and type coercion
 */

/*
var firstName = "Mellisa";
var age = 29;

//Type coercion
console.log(`${firstName} ${age}`);

var job, isMarried;

job = "Student";
isMarried = false;

console.log(`${firstName} is a ${age} year old ${job}. Is she married? ${isMarried}`);

// Variable mutation

age = "twenty nine";
job = "driver";

//alert(`${firstName} is a ${age} year old ${job}. Is she married? ${isMarried}`);

var lastName = prompt(`What is her last name?`);

console.log(`${firstName} ${lastName}`);

*/

/***************************************************
 * Basic operators
 */
/*
var yearNow, yearMellisa, yearBen;
yearNow = 2019;
ageMellisa = 29;
ageBen = 30;

//Math operators
yearMellisa = yearNow - ageMellisa;
yearBen = yearNow - ageBen;

console.log(yearMellisa);

console.log(yearNow + 2);
console.log(yearNow * 2);
console.log(yearNow / 2);

//Logic operators
var mellisaOlder = ageMellisa > ageBen;
console.log(mellisaOlder); //false

//typeof operator
console.log(typeof mellisaOlder); //boolean
console.log(typeof ageBen); //number
console.log(typeof "Mellisa is awesome"); //string

var x;
console.log(typeof x); //undefined

*/

/*************************************
 * Operator recedence
 */

/*
var now = 2019;
var yearMellisa = 1990;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearMellisa >= fullAge; //true
console.log(isFullAge);

//Grouping
var ageMellisa = now - yearMellisa;
var ageBen = 30;
var average = (ageMellisa + ageBen) / 2;
console.log(average);

//Multiple assignments

var x, y;

x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

// More operators

x *= 2;
console.log(x); //52

x += 10;
console.log(x); //62

x++; // 62
x-- //61
*/

/***************************************************
 * Coding Challenge 1
 */
/*
var markMass, markHeight, johnMass, johnHeight;
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var markCompare = markBMI > johnBMI;

console.log(`Is Mark's BMI higher than John's? ${markCompare}`);

//PASS

*/

/***************************************************
 * If/ else statements
 */

/*

var firstName = "Mellisa";
var civilStatus = "single";

if (civilStatus === "Married") {
   console.log(`${firstName} is married`);
} else {
   console.log(`${firstName} is single`);
}

var isMarried = true;
if (isMarried) {
   console.log(`${firstName} is married`);
} else {
   console.log(`${firstName} is single`);
}

var markMass, markHeight, johnMass, johnHeight;
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
   console.log(`Mark has a higher BMI`);
} else {
   console.log(`John has a higher BMI`);
}

*/

/***********************************************
 * Boolean logic
 */
/*
var firstName = "Mellisa";
var age = 16;
if (age < 13) {
    console.log(`${firstName} is a girl`);
} else if (age > 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
} else {
    console.log(`${firstName} is a woman`);
}

*/
/***************************************************
 * Ternary Operator
 */
/*
var firstName = "Mellisa";
var age = 14;

age >= 18 ? console.log(`${firstName} drinks beer`) : console.log(`${firstName} drinks juice`);

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);
*/

/*****************************************************
 * Truthy and Falsy values
 */
/*
//falsy values : undefined, null, 0, NaN
//truthy values : NOT falsy values

//Equality operators

height = 23;

if (height == "23") {
    console.log(`The == operator does type coercion`)
}
*/

/**********************************************************
 * Coding challenge 2
 */
/*
var johnsTeamAverage = (89 + 120 + 103) / 3;
var mikesTeamAverage = (116 + 94 + 123) / 3;
var marysTeamAverage = (97 + 134 + 105) / 3;
console.log(johnsTeamAverage, mikesTeamAverage, marysTeamAverage);

if (johnsTeamAverage > mikesTeamAverage && johnsTeamAverage > marysTeamAverage) {
    console.log(`John wins by ${johnsTeamAverage} points`);
} else if (mikesTeamAverage > johnsTeamAverage && mikesTeamAverage > marysTeamAverage) {
    console.log(`Mike wins by ${mikesTeamAverage} points`);
} else if (marysTeamAverage > johnsTeamAverage && marysTeamAverage > mikesTeamAverage) {
    console.log(`Mary wins by ${marysTeamAverage} points`);
} else {
    console.log(`There is a draw.`);
}

*/

/**************************************************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageMellisa = calculateAge(1990);
var ageBen = calculateAge(1989);
var ageJake = calculateAge(1948);

console.log(ageMellisa, ageBen, ageJake);

function yearsRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }

}

yearsRetirement(1990, "Mellisa");
yearsRetirement(1989, "Ben");
yearsRetirement(1948, "Jake");
*/

/**********************************************************
 * Function Statements and Expressions
 */

/*

//Function Declaration
//function whatDoYouDo(job, firstName) {

//}

//Function Expression
var whatDoYouDo = function (job, firstName) {
   switch (job) {
       case "teacher":
           return `${firstName} teaches kids how to code`;
       case "driver":
           return `${firstName} drives people around`;
       case "designer":
           return `${firstName} designs beautiful websites`
       default:
           return `${firstName} does something else.`;
   }
}

console.log(whatDoYouDo('teacher', 'Mellisa'));
console.log(whatDoYouDo('designer', 'Ben'));
console.log(whatDoYouDo('driver', 'Jake'));
console.log(whatDoYouDo('store', 'Doug'));

*/

/******************************************************
 * Arrays
 */

/*
// New array
var names = ["Mellisa", "Ben", "Jake"];
var years = new Array(1990, 1989, 1948);
console.log(names[0]);
console.log(names);
console.log(names.length);

//Mutate array data
names[1] = "Mark";
names[names.length] = "Mary";
console.log(names);

//Different data types

var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue"); //places in back
john.unshift("Mr."); //places in front
console.log(john);

john.pop(); //removes from end
john.pop(); //removes from end
john.shift(); // removes from front
console.log(john);

console.log(john.indexOf(1990)); //indexof shows the place where 1990 is (2)

var isDesigner = john.indexOf("designer") === -1 ? "John is not a designer" : "John is a designer";
console.log(isDesigner);

*/

/**********************************************************
 * Coding challenge 2
 */
var bill = [124, 48, 268];
var tip = [];
var totalPaid = [];

function tipCalculator(bill) {
    var percentage;

    if (bill < 50) {
        percentage = 0.2
        tip.push((bill * percentage).toFixed(2));
        totalPaid.push(bill + (bill * percentage));

    } else if (bill > 50 && bill <= 200) {
        percentage = 0.15;
        tip.push((bill * percentage).toFixed(2));
        totalPaid.push(bill + (bill * percentage));

    } else if (bill > 200) {
        percentage = 0.10;
        tip.push(bill * percentage);
        totalPaid.push(bill + (bill * percentage));
    }
    return percentage * bill
}

console.log(tipCalculator(124));
console.log(tipCalculator(48));
console.log(tipCalculator(268));

console.log(bill);
console.log(tip);
console.log(totalPaid);

//PASS