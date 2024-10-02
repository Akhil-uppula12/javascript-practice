/setTimeout and setInterval
//1
function greet() {
    console.log('Hello after 3 seconds');
}
setTimeout(greet, 3000);

//2
function displayMessage(message) {
    console.log(message);
}
setTimeout(function() {
    displayMessage('This message appears after 2 seconds');
}, 2000);

//3
setTimeout(function() {
    console.log('Function executed after 5 seconds');
}, 5000);

//1
function countdown() {
    var count = 5;
    var interval = setInterval(function() {
        console.log(count);
        count--;
        if (count === 0) {
            console.log('Time up!');
            clearInterval(interval);
        }
    }, 1000);
}
countdown();

//2
function printMessage() {
    console.log('Repeating message every 3 seconds');
}
setInterval(printMessage, 3000);

//3
var counter = 0;
var interval = setInterval(function() {
    console.log('Counter: ' + counter);
    counter++;
    if (counter === 5) {
        clearInterval(interval);
    }
}, 1000);


//Rest parameters
//1
function sum(...numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));

//2
function concatenate(separator, ...strings) {
    return strings.join(separator);
}
console.log(concatenate('-', 'apple', 'banana', 'cherry'));

//3
function multiply(multiplier, ...numbers) {
    return numbers.map(function(num) {
        return num * multiplier;
    });
}
console.log(multiply(2, 1, 2, 3, 4));

//spread syntax
//1
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = [...arr1, ...arr2];
console.log(combined);

//2
var numbers = [5, 10, 15];
function add(a, b, c) {
    return a + b + c;
}
console.log(add(...numbers));

//3
var obj1 = { name: 'John', age: 30 };
var obj2 = { profession: 'Developer' };
var combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

//closure
//1
function outer() {
    var count = 0;
    return function() {
        count++;
        console.log('Counter: ' + count);
    };
}
var counter = outer();
counter();
counter();

//2
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
var double = multiplier(2);
console.log(double(5));  // Output: 10

//3
function greet(message) {
    return function(name) {
        console.log(message + ', ' + name);
    };
}
var sayHello = greet('Hello');
sayHello('Alice');
sayHello('Bob');


//protoypal Inheritance
//1
var animal = {
    speak: function() {
        console.log(this.name + ' makes a sound.');
    }
};

var dog = {
    name: 'Rover'
};
dog._proto_ = animal;

dog.speak(); 

//2
var person = {
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var john = {
    firstName: 'John',
    lastName: 'Doe'
};

john._proto_ = person;

console.log(john.fullName()); 

//3
var animal = {
    speak: function() {
        console.log('Animal speaks');
    }
};

var dog = {
    speak: function() {
        console.log('Dog barks');
    }
};
dog._proto_ = animal;

dog.speak();