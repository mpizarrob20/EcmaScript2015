/////////////////////////////////////////////
//// Lecture: let and const //// Class 95

//ES5 
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6 
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller';
console.log(name6);

//ES5 
function driverLicence(passedTest) {
    
    
    if(passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
        
        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    }    
}

driverLicence(true);


//ES6
function driverLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;
    
    if(passedTest) {
        firstName = 'John';             
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driverLicence6(true);


//////////////////// Example

let i = 23;

for(let i=0; i < 5; i++){
    console.log(i);
}

console.log(i);

console.log('------------');

var f = 23;

for(var f=0; f < 5; f++){
    console.log(f);
}

console.log(f);


//////////////////////////////////////////////////////
/////Lecture: Block and IIFEs // Class 96

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//coansole.log(a + b)
console.log(c);

//ES5
(function() {
    var c = 3;
})();


///////////////////////////////////////////////////
////// Lecture: String 

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('tr'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));


////////////////////////////////////////////////////////////
///Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});

console.log(ages5);

//ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {const now = new Date().getFullYear();
                                  const age = now - el;
                                  return `Age element ${index + 1}: ${age}.`});
console.log(ages6);


//////////////////////////////////////////////////////////////////////
//////// Lecture: Arrow functions 2


//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box6.clickMe();


//Other scenario
/*const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box66.clickMe();*/


//ES5
function Person(name){
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


//ES6
Person.prototype.myFriends6 = function(friends) {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
        
    
    console.log(arr);
}

new Person('Mike').myFriends6(friends);

///////////////////////////////////////////////////////
/// Lecture: Destructuring

//ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName1: 'John',
    lastName1: 'Smith'
};

const {firstName1, lastName1} = obj;
console.log(firstName1);
console.log(lastName1);

const {firstName1: a, lastName1: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);


/////////////////////////////////////////////////////////////
////Lecture: Array


const boxes = document.querySelectorAll('.box');


//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//Other Example
/*
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/

//ES5
/*
for(var f = 0; f < boxesArr5.length; f++){
    
    if(boxesArr5[f].className === 'box blue') {
        continue;
        
    }
    
    boxesArr5[f].textContent = 'I changed to blue';
}
*/

//ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
console.log(ages.findIndex(cur => cur >= 18));//encuentra la posición del arreglo en la que esta el elemento
console.log(ages.find(cur => cur >= 18)); // encuentra el elemento que cumple con la condición

console.log('-----------------')
/////////////////////////////////////////////////////////////////////////////////////////
/// Lecture: Spread operator

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);


//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box');
const all = [h, ...boxes1];

Array.from(all).forEach(cur => cur.style.color = 'purple');


/////////////////////////////////////////////////////////////////////////////////////////
/////Lecture: Rest parameters

/*
//ES5
function isFullAgess5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

//isFullAgess5(1990, 1999, 1965);
//isFullAgess5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAgess6(...yearss) {
   // console.log(years);
    yearss.forEach(cur => console.log((2016 - cur) >= 18));
}


isFullAgess6(1990, 1999, 1965, 2016, 1987);
*/

//ES5
function isFullAgess5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    
    //console.log(argsArr); // te imprime el arreglo a partir de la posicion 1
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

//isFullAgess5(16, 1990, 1999, 1965);
//isFullAgess5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAgess6(limit, ...yearss) {
   // console.log(years);
    yearss.forEach(cur => console.log((2016 - cur) >= limit));
}


isFullAgess6(16, 1990, 1999, 1965, 2016, 1987);


///////////////////////////////////////////////////////////////////////
////Lecture: Default parameters

//ES5
function SmithPerson(firstNameDP, yearOfBirthDP, lastNameDP, nationality) {
    
    lastNameDP === undefined ? lastNameDP = 'Smith' : lastNameDP = lastNameDP;
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    
    this.firstNameDP = firstNameDP;
    this.lastNameDP = lastNameDP;
    this.yearOfBirthDP = yearOfBirthDP;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');


//ES5
function SmithPerson(firstNameDP, yearOfBirthDP, lastNameDP, nationality) {
    
    lastNameDP === undefined ? lastNameDP = 'Smith' : lastNameDP = lastNameDP;
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    
    this.firstNameDP = firstNameDP;
    this.lastNameDP = lastNameDP;
    this.yearOfBirthDP = yearOfBirthDP;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');



//ES6
function JhonsonPerson(firstNameJP, yearOfBirthJP, lastNameJP = 'Jhonson', nationalityJP = 'chinese') {
    
    this.firstNameJP = firstNameJP;
    this.lastNameJP = lastNameJP;
    this.yearOfBirthJP = yearOfBirthJP;
    this.nationalityJP = nationalityJP;
}

var luca = new JhonsonPerson('Luca', 1990);
var lisa = new JhonsonPerson('Lisa', 1983, 'Diaz', 'american');

///////////////////////////////////////////////////////////////////
/// Lecture: Maps

const question = new Map(); // empty map
question.set('question', 'What is the official name of the lastest major javascript version');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

//Para ver lo que tiene el map, solo escribo en la consola el nombre del map

console.log(question.get('question')); // le paso la llave y me devuelve el valor
console.log(question.size); // dimension del map

if(question.has(4)){
    //question.delete(4); //elimina un elemento especifico
    console.log('Answer 4 is here');
}

//Elimina todo de uan vez
//question.clear;


//question.forEach((value, key) => console.log('This is ${key}, and its set to ${value}'));

for(let [key, value] of question.entries()){
    //console.log('This is ${key}, and its set to ${value}');
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

//const ans = parseInt(prompt('Write the correct answer'));
//console.log(question.get(ans === question.get('correct')));


//////////////////////////////////////////////////////////
/// Lecture: Classes

//ES5
var Person5 = function(name, yearOfBirth5, job){
    this.name = name;
    this.yearOfBirth5 = yearOfBirth5;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth5;
    console.log(age);
}

var john5 = new Person5 ('John', 1990, 'teacher');


//ES6
class Person6 {
    constructor (name6, yearOfBirth6, job6) {
        this.name6 = name6;
        this.yearOfBirth6 = yearOfBirth6;
        this.job6 = job6;
    }
    
    calculateAge() {
        var age6 = new Date().getFullYear() - this.yearOfBirth6;
        console.log(age6);
    }
    
    static greeting(){
        console.log('Here there!');
    }
}


const john6 = new Person6('John6', 1990, 'teacher');
Person6.greeting();


////////////////////////////////////////////////////////
// Lecture: Classes and subclasses

//ES5
var PersonCC = function(nameCC, yearOfBirthCC, jobCC){
    this.nameCC = nameCC;
    this.yearOfBirthCC = yearOfBirthCC;
    this.jobCC = jobCC;
}

PersonCC.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirthCC;
    console.log(age);
}

var johnCC = new PersonCC ('John', 1990, 'teacher');

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals){
    
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
    
}

Athlete5.prototype = Object.create(Person5.prototype);
var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


//ES6
class PersonCC6 {
    constructor (name6, yearOfBirth6, job6) {
        this.name6 = name6;
        this.yearOfBirth6 = yearOfBirth6;
        this.job6 = job6;
    }
    
    calculateAge() {
        var age6 = new Date().getFullYear() - this.yearOfBirth6;
        console.log(age6);
    }
}

class Athlete6 extends PersonCC6{
    constructor(name, yearOfBirth, job, olymicGames, medals) {
        super(name, yearOfBirth, job);
        this.olymicGames = olymicGames;
        this.medals = medals;        
    }
    
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}


const johnAthlete6 = new Athlete6('John6', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete5.calculateAge();































