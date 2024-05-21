const basicAuth = require('express-basic-auth');

const authMiddleware = (req, res, next) => {
  // Check if the request is for the base homepage or RapidApi proxy
  if (req.originalUrl === '/' || req.headers['x-rapidapi-proxy-secret'] === 'afd31020-a0d4-11ee-a229-a14728031a46') {
    // If it is, skip the password check
    next();
  } else {
    // If it's not, apply the password check
    basicAuth({
      users: { 'demouser': 'demopass' },
      challenge: true,
      realm: 'api.countrywise.io',
    })(req, res, next);
  }
};

module.exports = authMiddleware;