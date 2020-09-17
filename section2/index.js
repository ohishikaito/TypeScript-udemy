var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var hello;
hello = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 1] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 2] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fjiafjaj = 'faijfi';
var banana = 'banana';
banana = anything;
var unionType = 10;
var unionTypes = [21, 'hello'];
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    // console.log('Hello!');
}
// console.log(sayHello());
var tmp;
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    // console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
