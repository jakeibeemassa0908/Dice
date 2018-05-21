var name = 'Jacques';
var lastName ='Massa';
var age=27;
var fullAge = true;
var wife, childNum;
var cityLived=['kinshasa','delhi','faridabad','houston'];
var cityLivedClass = new Array('kinshasa','delhi','faridabad','houston');

console.log(name);
console.log(lastName);
console.log(age);
console.log(fullAge);
 
console.log(lastName + age);
console.log(wife);

//alert(lastName + age);

//=== does not do type coertion RECOMENDED because it's safer.
if(age ==='27'){
    console.log('yes');
}else{
    console.log('no');
}

//=== does  type coertion
if(age =='27'){
    console.log('yes');
}else{
    console.log('no');
}

switch(age){
    case "27":
        console.log('You are 27');
        break;
    case 27:
        console.log("Number is 27");
        break;
    default:
        console.log("Didn't work");
}

function calculateBirthYear(currentYear){
    return currentYear - age;
}

console.log(calculateBirthYear(2018));
console.log(cityLivedClass[3]);

//object literal

var jacques = {
    name: 'Jacques',
    lastName:'Massa',
    job:'Sotware Engineer',
    school:'University of Houston',
    age:27,
};

var toReplace = "job";
console.log(jacques['age'] + jacques.school+jacques[toReplace]);

var ann = new Object();
ann.name = "Ann-Marie";
ann.lastName = "Onuoha";
ann.yearOfBirth= 1996;
ann.school = "South University";

console.log(ann);