// var test = require('./test.js');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'ikXWj1Ax2U3IzwvjbTxQWImUL',
  consumer_secret: 'zKd3UQe0cTbUUZU6RqdBFPHmYVW6L5beOXjdhBbV2z6nxaxorF',
  access_token_key: '838546029997875200-DSPp5qL6v4is1lnfoDxHcV8zXQOryh4',
  access_token_secret: 'qx4InHBYGGQ7MvfAM9nXrPvbEBjRKqqgTxeVSjOVP5PE9'
});

var params = {screen_name: 'realDonaldTrump'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    tweets.forEach(function(x){
      console.log(x.text);
    });
  }
});
