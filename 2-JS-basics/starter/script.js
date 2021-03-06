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

/*
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
*/

/*************************************************************
 * Objects
 */

/*
//object literal
var mellisa = {
   firstName: "Mellisa",
   lastName: "Madrid",
   birthYear: 1990,
   family: [
       "Danyel",
       "Floss",
       "Ann",
       "Ben"
   ],
   job: "student",
   isMarried: false
};
console.log(mellisa.firstName);
console.log(mellisa["lastName"]);
var x = "birthYear";
console.log(mellisa[x]);

// object mutation
mellisa.job = "designer";
mellisa["isMarried"] = true;
console.log(mellisa);

// new object syntax
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1989;
jane["lastName"] = "Smith";

console.log(jane);
*/

/*****************************************************
 * Methods
 */
/*
var mellisa = {
    firstName: "Mellisa",
    lastName: "Madrid",
    birthYear: 1990,
    family: [
        "Danyel",
        "Floss",
        "Ann",
        "Ben"
    ],
    job: "student",
    isMarried: false,


    calcAge: function () {
        this.age = 2019 - this.birthYear
    }
};

mellisa.calcAge();
console.log(mellisa);
*/

/*****************************************************************
 * Coding challenge 4
 */
/*
var mark = {
    firstName: "Mark",
    lastName: "Smith",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var john = {
    firstName: "John",
    lastName: "Jake",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


function compareBMI() {
    if (mark.calcBMI() > john.calcBMI()) {
        console.log(`${mark.firstName}'s BMI is higher by ${mark.bmi} points`);
    } else {
        console.log(`${john.firstName}'s BMI is higher by ${john.bmi}`);
    }
}
compareBMI();
*/

/*********************************************************************
 * Loops
 */

/*
//For loop
for (var i = 0; i < 10; i++) {
   console.log(i);
}

var mellisa = ["Mellisa", "Madrid", 1990, "student", false, "blue"];
for (var i = 0; i < mellisa.length; i++) {
   console.log(mellisa[i]);
}

//While loop
var i = 0;
while (i < mellisa.length) {
   console.log(mellisa[i]);
   i++;
}


// continue and break
var mellisa = ["Mellisa", "Madrid", 1990, "student", false, "blue"];

// if the array is different from a string, skip over it and continue
for (var i = 0; i < mellisa.length; i++) {
    if (typeof mellisa[i] !== "string")
        continue;
    console.log(mellisa[i]);
}

// if the array comes across anything other than a string - stop.
for (var i = 0; i < mellisa.length; i++) {
    if (typeof mellisa[i] !== "string")
        break;
    console.log(mellisa[i]);
}

for (var i = mellisa.length - 1; i >= 0; i--) {
    console.log(mellisa[i]);
}

*/

/*******************************************************************
 * Coding challenge 5
 */


var johnRestaurantBills = {
    fullName: "John Smith",
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalPaid: [],

    tipCalc: function () {
        var percentage;

        for (var i = 0; i < this.bills.length; i++) {

            if (this.bills[i] < 50) {
                percentage = 0.2;
                this.tips.push(this.bills[i] * percentage);
                this.finalPaid.push(this.bills[i] + (this.bills[i] * percentage));
            } else if (this.bills[i] > 50 && this.bills[i] < 200) {
                percentage = 0.15;
                this.tips.push(this.bills[i] * percentage);
                this.finalPaid.push(this.bills[i] + (this.bills[i] * percentage));
            } else if (this.bills[i] > 200) {
                percentage = 0.10;
                this.tips.push(this.bills[i] * percentage);
                this.finalPaid.push(this.bills[i] + (this.bills[i] * percentage));
            }

        }
        console.log(this.bills);
        console.log(this.tips);
        console.log(this.finalPaid);

    },

}
johnRestaurantBills.tipCalc();


var markRestaurantBills = {
    fullName: "Mark Popadoppolus",
    bills: [77, 475, 110, 45],
    tips: [],
    finalPaid: [],

    tipCalc: function () {
        var percentage;

        for (var i = 0; i < this.bills.length; i++) {

            if (this.bills[i] < 100) {
                percentage = 0.2;
                this.tips.push(this.bills[i] * percentage);
                this.finalPaid.push(this.bills[i] + (this.bills[i] * percentage));
            } else if (this.bills[i] > 100 && this.bills[i] < 300) {
                percentage = 0.10;
                this.tips.push(this.bills[i] * percentage);
                this.finalPaid.push(this.bills[i] + (this.bills[i] * percentage));
            } else {
                percentage = 0.25;
                this.tips.push(this.bills[i] * percentage);
                this.finalPaid.push(this.bills[i] + (this.bills[i] * percentage));
            }

        }
        console.log(this.bills);
        console.log(this.tips);
        console.log(this.finalPaid);

    },

}
markRestaurantBills.tipCalc();

function jAverageTips() {
    var johnsAverageTips = 0
    for (var i = 0; i < johnRestaurantBills.tips.length; i++) {
        johnsAverageTips += johnRestaurantBills.tips[i];


    }
    johnsTotalAverageTip = johnsAverageTips / 5;
    console.log(johnsTotalAverageTip);
}

jAverageTips();

function mAverageTips() {
    var marksAverageTips = 0
    for (var i = 0; i < markRestaurantBills.tips.length; i++) {
        marksAverageTips += markRestaurantBills.tips[i];


    }
    marksTotalAverageTip = marksAverageTips / 4;
    console.log(marksTotalAverageTip);
}
mAverageTips();

if (jAverageTips > mAverageTips) {
    console.log(`${johnRestaurantBills.fullName} family tipped higher by ${johnsAverageTips}`);
} else {
    console.log(`${markRestaurantBills.fullName} family tipped higher by  $${marksTotalAverageTip}`);
}