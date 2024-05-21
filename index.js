// https://rapidapi.com/guides/build-api-publish-on-rapidapi

// Importing packages
const express = require('express');
const cors = require('cors');
const path = require('path');
const getAllCountries = require('./utils/getAllCountries');
const getAllCountryData = require('./utils/getAllCountryData');
const countryRouteHandler = require('./utils/routeHandler');
const filterCountryData = require('./utils/filterCountryData');
const enforceSSL = require('./utils/enforceSSL');
const authMiddleware = require('./utils/basicAuth');
const favicon = require('serve-favicon');

// Creating express application
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/resources', express.static('resources'));
enforceSSL(app);
app.use(authMiddleware);
app.use(favicon(path.join(__dirname, 'favicon.svg')));

// Queried endpoints
app.get('/', async (req, res, next) => {
  const { country, fields } = req.query;

  // If country query parameter is not provided, pass control to the next route
  if (!country) {
    return next();
  }

  let countries = new Set(country.split(','));
  let allFields = fields ? fields.split(',') : [];
  let result = [];

  for (let country of countries) {
    // If country is 'all', return data for all countries
    if (country === 'all') {
      let allCountries = allFields.length > 0 ? filterCountryData(getAllCountryData(), allFields) : getAllCountryData();
      return res.json(allCountries);
    }

    // If country is a specific country, add data for that country to the result
    if (getAllCountries().includes(country)) {
      const countryModule = require(`./routes/${country}`);
      let data = allFields.length > 0 ? filterCountryData([countryModule.data], allFields)[0] : countryModule.data;
      result.push(data);
    } else {
      // If country is neither 'all' nor a specific country, return an error
      return res.status(404).json({ error: `Country not found: ${country}` });
    }
  }

  return res.json(result);
});

// Root endpoint
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CountryWise</title>
      </head>
      <body style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:'circular'; text-align: center;">
        <h1 style="background:url('/resources/images/logos/logo-cw-v2.svg') no-repeat center top; padding-top:3rem;">Welcome to the CountryWise API</h1>
      </body>
    </html>
  `);
});


// Starting server
const port = process.env.PORT || 5555;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
