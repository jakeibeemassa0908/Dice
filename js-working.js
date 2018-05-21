//Hoisting in JS

sayHello();
//console.log(demo());

function sayHello(){
    console.log('Hello Everybody');
}

var demo = function expression(){
    return "This is it";
}

console.log(demo());

