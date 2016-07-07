var age = 15;
var pi = 3.1416;
var date = new Date();
var computeArea = function (l, w) {
    return l * w;
};

var name = "Domz Cabando Tubalado,III";

console.log('Age:' + age);
console.log('PI:' + pi.toFixed(2));
console.log('Date:' + date);
console.log(name);
console.log(computeArea(10, 60));
var x = 1;
var y = null;
var z = undefined;
if (x)
    console.log('x is TRUE.');

if (!y)
    console.log('y is FALSE.');

if (!z)
    console.log('z is UNDEFINED.');

//============= =====>>> JSON - Javascript Object Notation;

var jsonObject = {
    name: 'Domz',
    lastname: 'Tubalado',
    address: 'Tabako St.'
};

console.log(jsonObject.name);
console.log(jsonObject.lastname);
console.log(jsonObject.address);
console.log(jsonObject);