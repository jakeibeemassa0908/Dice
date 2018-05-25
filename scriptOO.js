var john = {
    name:'Jacques',
    yearOfBirth: '1990',
    job:'teacher'
};

//function constructor
var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//inheritance in Js
Person.prototype.calculateAge = function(){
    console.log(2018-this.yearOfBirth);
}

var john = new Person("Jacques",1991,"Software Engineer");
john.calculateAge();

