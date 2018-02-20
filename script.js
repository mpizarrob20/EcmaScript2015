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























