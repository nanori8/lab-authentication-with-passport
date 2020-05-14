'use strict';

const { Router } = require('express');
const authenticationRouter = Router();

const passport = require('passport');

// 5 - We need to tell our route handlers to use their corresponding strategies.

// Sign-up
authenticationRouter.get('/sign-up', (req, res, next) => {
  res.render('authentication/sign-up');
});

authenticationRouter.post(
    '/sign-up',
    passport.authenticate('sign-up', {
        successRedirect: '/',
        failureRedirect: '/authentication/sign-up'
    })
);

// Sign-in
authenticationRouter.get('/sign-in', (req, res, next) => {
  res.render('authentication/sign-in');
});

authenticationRouter.post(
  '/sign-in',
  passport.authenticate('sign-in', {
    successRedirect: '/',
    failureRedirect: '/authentication/sign-in'
  })
);

// view one
authenticationRouter.get('/private/:placeId', (req, res, next) =>{
    const usereId = user._id
    .findById(usereId)
    .then(user => {
        res.render('authentication/private', {user});
    });
});

//Sign-out
authenticationRouter.post('/sign-out', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = authenticationRouter;
