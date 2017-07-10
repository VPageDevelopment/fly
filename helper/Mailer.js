'use strict';

require('dotenv').config();


var api_key = process.env.MAILGUN_API;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'Test User <postmaster@sandbox4729a89fdc8d493497e251c530a0e38a.mailgun.org>',
  to: 'vpagedevelopment@gmail.com',
  subject: 'test nodejs',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});