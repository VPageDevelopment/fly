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
    from: 'Fly <postmaster@fly.vpageinc.com>',
    to: 'vpagedevelopment@gmail.com',
    subject: 'Please verify your Fly Account !',
    html:`
      <p>
        Hi,
        Thanks for using Fly Tourist! Please confirm your email address by clicking on the link below. 
          ${activationLink}
        If you did not sign up for a Fly Tourist account please click on the link below.
          ${appDomain}
        Happy Booking ! Fly Tourister
      </p>
    `,
    text: `
      Hi,
      Thanks for using Fly Tourist! Please confirm your email address by clicking on the link below. 
        ${activationLink}
      If you did not sign up for a Fly Tourist account please click on the link below.
        ${appDomain}
      Happy Booking ! Fly Tourister
    `
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    req.login(userID,(err)=>{
      res.redirect(`/user/dashboard/${userID}`);
    })
    if(error || body === 'undefind'){
      res.redirect(`/`);
    }
  });
}


module.exports = {Mailer};

