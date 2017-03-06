var fs = require("fs");

module.exports = {
  pwd: function() {
    console.log(process.env.PWD);
  },

  date: function() {
    console.log(new Date().toString());
  },

  echo: function(arr) {
      console.log(arr.slice(1).join(' '));
  },

  cat: function(arr) {
    fs.readFile(arr[1], 'utf-8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + arr[1]);
    console.log(data);
    });
  },

  head: function(arr) {
    fs.readFile(arr[1], 'utf-8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + arr[1]);
    var txt = data.toString();
    console.log(txt.slice(0, Math.floor(txt.length/2)));
    });
  },

  tail: function(arr) {
    fs.readFile(arr[1], 'utf-8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + arr[1]);
    var txt = data.toString();
    console.log(txt.slice(Math.floor(txt.length/2)));
    });
  },

  sort: function(arr) {
    fs.readFile(arr[1], 'utf-8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + arr[1]);
    console.log(data.split('\n').sort());
    });
  },

  wc: function(arr) {
    fs.readFile(arr[1], 'utf-8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + arr[1]);
    console.log(data.split('\n').length);
    });
  },

  uniq: function(arr) {
    fs.readFile(arr[1], 'utf-8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + arr[1]);
    var array = data.split('\n');
    var newArr = [];
    for(var i = 0; i < array.length; i++) {
      if(newArr.indexOf(array[i]) === -1) {
        newArr.push(array[i]);
      }
    }
    console.log(newArr);
    });
  },

  ls: function() {
    fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    });
  });
  }

};
