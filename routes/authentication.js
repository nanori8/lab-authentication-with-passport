'use strict';

const { Router } = require('express');
const authenticationRouter = Router();

const routeGuard = require('./../middleware/route-guard');

const passport = require('passport');


// new Github router
authenticationRouter.get(
  '/github',
  passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/error'
  })
);

authenticationRouter.get(
  '/github-callback',
  passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/error'
  })
);


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
// authenticationRouter.get('/private/:usereId', (req, res, next) =>{
//     const usereId = req.body.id
//     .findById(usereId)
//     .then(user => {
//         res.render('authentication/private', {user});
//     });
// });

authenticationRouter.get('/private', routeGuard, (req, res, next) => {  
  res.render('authentication/private');});

//Sign-out
authenticationRouter.post('/sign-out', routeGuard, (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = authenticationRouter;
