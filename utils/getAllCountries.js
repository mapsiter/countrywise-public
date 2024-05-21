const fs = require('fs');
const path = require('path');

// Get all countries from routes directory
function getAllCountries() {
  const countriesDir = './routes';
  const countries = fs.readdirSync(countriesDir).map(file => path.parse(file).name);

  return countries;
}

module.exports = getAllCountries;