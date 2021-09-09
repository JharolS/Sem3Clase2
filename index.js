// initialize greeting function
function greet(name){
    console.log(`Hello ${name   }`);
}

// Invoke the function
greet('Daniel');

function multiply(num1, num2) {
    return num1 * num2;
}

const result = multiply(5, 5)

console.log(result)

const sum = function (a, b) {
    return a + b;
}
console.log(sum(20, 5))

const multiplier = (num1,num2) => num1*num2;
//const multiply2 = (a,b) => {
//    return a *
// }

//function printThis(){
//    console.log(this);
//}
//printThis();

const america = {
    name: 'The United State of America',
    yearFounded: 1776,
    details: {
        symbol: 'eagle',
        currecy: 'USD',
        printDetails() {
            console.log(`The symbol is the ${this.symbol} and the currency is ${this.currecy}`)
        }
    },
    decrbie(){
        console.log(`${this.name} was founded in ${this.yearFounded}`)
    }
}

america.decrbie();
america.details.printDetails();

function Country(name, yearFounded) {
    this.name = name;
    this.yearFounded = yearFounded;

    this.describe = function(){
        console.log(`${this.name} was founded is ${this.yearFounded}`)
    }
}

const american = new Country('The United States of America', 1776);
american.describe();

class States {
    constructor(name, yearFounded){
        this.name = name;
        this.yearFounded = yearFounded;
    }
    describe() {
        console.log(`${this.name} was founded in ${this.yearFounded}`);
    }
}

const usa = new States('The United States of America', 1776);
usa.describe();

//const button = document.createElement('button');
//button.textContent = 'Click me';
//document.body.append(button);

//button.addEventListener('click', function() {
//    console.log(this)
//})

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
}

function summary(){
    console.log(`${this.title} was written by ${this.author}`)
}

summary.call(book);
summary.apply(book);

function printThis(){
    console.log(this);
}

printThis.call(book);
printThis.apply(book);

function longerSummary(genre, year) {
    console.log(`${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}`)
}

longerSummary.call(book, 'fantasy', '1949')
longerSummary.apply(book, ['fantasy', '1949'])

const myBook = summary.bind (book);

myBook();

const book2 = {
    title: 1984,
    author: 'George Orwell'
}

myBook.bind(book2); //no change behind 

myBook();

const whoAmI = {
    name: 'Daneil',
    regularFunction: function(){
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}
whoAmI.regularFunction();
whoAmI.arrowFunction();

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.append(button);

class Display {
    constructor () {
        this.buttonText = 'Clicked'
        button.addEventListener('click', event => {
            event.target.textContent = this.buttonText
        })
    }
}

new Display();
let userName = 'Daniel'
function showMessage(){
    let message = `Hello, ${userName}`;
    alert(message)
}

showMessage();

function showCount(count){
    // if count is undefined o nullm, show 'unknoewn
    laert(count ?? 'unknown');
}

showCount(0);
showCount(null);
showCount();

// 'get' - return vaule
// "calc" - calculate something
// "create" -create something
// "set" - set a value
// "check" -check something and return a boolean, etc.