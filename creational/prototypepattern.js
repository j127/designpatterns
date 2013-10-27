// "The prototype pattern is a pattern where objects are created based on a template of an existing object through cloning."

// This example doesn't work in IE8
var Person = {
    numFeet: 2,
    numHeads: 1,
    numHands: 2
};

// Object.create takes its first argument and applies it to the prototype of your new object
var tilo = Object.create(Person);

console.log(tilo.numHeads); // 1
tilo.numHeads = 2;
console.log(tilo.numHeads); // 2


