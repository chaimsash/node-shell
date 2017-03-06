var test = require('./test.js');

console.log(test);
console.log(test.test());
console.log(test.test2);
var howdy = new test.Test3('ice', 'water');
console.log(howdy, howdy.a);
console.log(test.test4); //will only work if i did whole test.js like exports.
