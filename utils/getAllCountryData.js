const getAllCountries = require("./getAllCountries");

// Import and aggregate country data for the /all endpoint
function getAllCountryData() {
  const allCountriesData = getAllCountries().map(countryCode => {
    const { data } = require(`../routes/${countryCode}`);
    return data;
  });
  return allCountriesData;
}

module.exports = getAllCountryData;
