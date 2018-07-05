const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

passport.use( new Auth0Strategy({
    domain: 'gson007.auth0.com',
    clientID: 'hEaTPoVz7pP-kfcbIwcCM5hLWcSRn4hS',
    clientSecret: 'NqC8IL_NMjk2CqJWztV8trVi3kv_QJ2U4FueFTT-rojztIJPqhNw1RiXwc89yxI1',
    callbackURL: 'http://localhost:3000/callback'
  }, (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
}))