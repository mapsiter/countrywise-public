// Enforce HTTPS
const enforceSSL = (app) => {
  if (process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.get('x-forwarded-proto') !== 'https') {
        res.redirect(`https://${req.hostname}${req.url}`);
      } else {
        next();
      }
    });
  }
};

module.exports = enforceSSL;