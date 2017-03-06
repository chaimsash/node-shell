function test (){
  return 'ldsngkjngkdfnk';
}

var test2 = 'test2 meow';

function Test3 (a, b){
  this.a = a,
  this.b = b
}

exports.test4 = [1,2,3,4,5]; //will only work if i did whole test.js like exports.

module.exports = {
    test: test,
    test2: test2,
    Test3: Test3
};
