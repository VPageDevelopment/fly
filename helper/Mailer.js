'use strict';
require('dotenv').config();
const passport = require('passport');
var api_key = process.env.MAILGUN_API;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

const Mailer = (req,res,userID,activationToken,userEmailID ) => {

  const appDomain = "http://localhost:9000";
  const signUpLink = `${appDomain}`;
  const activationLink = `${appDomain}/user/accounts/activate/${activationToken}`;
  const userEmail = userEmailID;

  var data = {
    from: 'Fly <postmaster@sandbox4729a89fdc8d493497e251c530a0e38a.mailgun.org>',
    to: userEmail,
    subject: 'Please verify your Fly Account !',
    html:`
      <p>
        Hi,
        Thanks for using Fly Tourist! Please confirm your email address by clicking on the link below. 
        ${ activationLink }
        If you did not sign up for a Fly Tourist account please click on the link below.
        ${ signUpLink }
        Happy Booking ! Fly Tourister
      </p>
    `,
    text: `
      Hi,
      Thanks for using Fly Tourist! Please confirm your email address by clicking on the link below. 
      ${ activationLink }
      If you did not sign up for a Fly Tourist account please click on the link below.
      ${ signUpLink }
      Happy Booking ! Fly Tourister
    `
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    req.login(userID,(err)=>{
      res.redirect(`/user/dashboard/${userID}`);
    })
  });
}


module.exports = {Mailer};

