///////////////////////////////////////
// Lecture: Hoisting

/*
//functions
calcAge(1990);
function calcAge(year) {
    console.log(2016 - year);
}

//retirement(1990);

var retirement = function (year) {
    console.log(65 - (2016 - year));
}

//variables
var age = 23;
console.log(age);



function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);



*/




///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword



//console.log(this);

//calcAge(1990);

//function calcAge(year) {
//    console.log(2016 - year);
//    console.log(this);
//}

var mellisa = {
    name: "Mellisa",
    yearOfBirth: 1990,

    calcAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        /*function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}
mellisa.calcAge();


var ben = {
    name: "Ben",
    yearOfBirth: 1989
};

ben.calcAge = mellisa.calcAge;
ben.calcAge();