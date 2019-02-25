// Function constructor
/*
var mellisa = {
    name: "Mellisa",
    yearOfBirth: 1990,
    job: "student"
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calcAge = function () {
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var mellisa = new Person('Mellisa', 1990, 'student');
var ben = new Person('Ben', 1989, 'quantity surveyor');
var mark = new Person('Mark', 1948, 'retired');

mellisa.calcAge();
ben.calcAge();
mark.calcAge();

console.log(mellisa.lastName);
console.log(ben.lastName);
console.log(mark.lastName);
*/

/*********************************************************************
 * Object.create
 */
/*
var personProto = {
    calcAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
};

var mellisa = Object.create(personProto);
mellisa.name = 'Mellisa';
mellisa.yearOfBirth = 1990;
mellisa.job = 'student';

var ben = Object.create(personProto, {
    name: { value: 'Ben' },
    yearOfBirth: { value: 1989 },
    job: { value: 'designer' }
});

*/

/****************************************************************
 * Primitaves vs objects
 */

/*
//primateves

var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

//Objects

var obj1 = {
   name: 'Mellisa',
   age: 29
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

//functions

var age = 35;
var obj = {
   name: "Kelly",
   city: "London"
};

function change(a, b) {
   a = 30;
   b.city = "Orlando"
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/

/***********************************************************
 * Passing functions as arguments
 */

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, func) {
  var arrayResult = [];
  for (let i = 0; i < array.length; i++) {

     arrayResult.push(func(array[i]));

  }
  return arrayResult;
}

function calcAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
     return Math.round(206.9 - (0.67 * el));

  } else {
     return -1;
  }
}

var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
console.log(fullAges);
console.log(ages);

*/

/************************************************************************
 * Functions returning functions
 */
/*
function interviewQuestions(job) {
   if (job === 'designer') {
      return function (name) {
         console.log(`${name} can you please explain what UX design is?`);
      }
   } else if (job === 'teacher') {
      return function (name) {
         console.log(`What subject do you teach, ${name}?`);
      }
   } else {
      return function (name) {
         console.log(`Hello, ${name}, what do you do?`);
      }
   }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');
designerQuestion('Ben');
teacherQuestion('Mellisa');

interviewQuestions('teacher')('Kayla');

*/

/***************************************************************
 * IFFE
 */

/*

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();


(function (goodluck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})(5);

*/

/****************************************************************
 * Closures
 */

/*
function retirement(retirementAge) {
  var a = ` years left until retirement`;
  return function (yearOfBirth) {
     var age = 2019 - yearOfBirth;
     console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66)(1990);
var retirementUK = retirement(65)(1960);
var retirementIceland = retirement(67)(1977);

function interviewQuestions(job) {
  return function (name) {
     if (job === 'teacher') {
        console.log(`What subject do you teach, ${name}?`);
     } else if (job === 'designer') {
        console.log(`${name}, can you please explain what UX design is?`);
     } else {
        console.log(`Hello, ${name}, what do you do?`);
     }
  }
}

interviewQuestions('teacher')('Mellisa');
interviewQuestions('designer')('Mellisa');
*/

/*****************************************************************
 * Bind, call apply
 */

/*
var john = {
  name: "John",
  age: 29,
  job: "student",

  presentation: function (style, timeOfDay) {
     if (style === 'formal') {
        console.log(`Good ${timeOfDay}, ladies and gentlemen! I'm ${this.name}, I'm a ${this.job}, and I'm ${this.age} years old.`)
     } else if (style === 'friendly') {
        console.log(`Hey, whats up? I'm ${this.name}, I'm a ${this.job}, and I'm ${this.age} years old. Have a nice ${timeOfDay}`);
     }
  }
}

var emily = {
  name: "Emily",
  age: 30,
  job: "teacher"
}
john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('afternoon');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, func) {
  var arrayResult = [];
  for (let i = 0; i < array.length; i++) {

     arrayResult.push(func(array[i]));

  }
  return arrayResult;
}

function calcAge(el) {
  return 2019 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calcAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

*/

/*************************************************************
 * Coding challenge
 */

(function () {

   var Question = function (question, answers, correctAnswer) {
      this.question = question;
      this.answers = answers;
      this.correctAnswer = correctAnswer;

   };

   Question.prototype.randomQuestion = function () {
      console.log(this.question);
      for (var i = 0; i < this.answers.length; i++) {

         console.log(`${i} : ${this.answers[i]}`);
      }
   };

   Question.prototype.getAnswer = function (ans) {
      if (ans === this.correctAnswer) {
         console.log(`Correct Answer`)
      } else {
         console.log(`Wrong, try again.`)
      }
   }

   function keepGoing() {
      var questionArray = [question1, question2, question3, question4];

      var randomQuestionArray = Math.floor(Math.random() * questionArray.length);


      questionArray[randomQuestionArray].randomQuestion();
      var answer = prompt(`Select the correct answer`);


      if (answer !== 'exit') {
         questionArray[randomQuestionArray].getAnswer(parseInt(answer));
         keepGoing();
      }

   }



   var question1 = new Question(`What is Mellisa's favorite animal?`, ["Dog", "Cat", "Bird"], 1);
   var question2 = new Question(`Where was Mellisa born?`, ["Florida", "California", "New York"], 0);
   var question3 = new Question(`What is Mellisa's favorite sweet?`, ["Haribo", "Percy Pigs", "Fizzy Tails"], 2);
   var question4 = new Question(`What is in my pocket?`, ["Button", "Ring", "String"], 1);

   keepGoing();

})();

