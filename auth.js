const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

passport.use( new Auth0Strategy({
    domain: 'YOUR AUTHO DOMAIN',
    clientID: 'YOUR AUTH0 CLIENT ID',
    clientSecret: 'YOUR AUTH0 SECRET KEY',
    callbackURL: 'http://localhost:3000/callback'
  }, (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
}))