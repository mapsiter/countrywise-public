const generateCountryData = require('./countryData');
const filterCountryData = require('./filterCountryData');

// Country route handler
function countryRouteHandler(countryData) {
  return function(req, res) {
    let fields = req.query.fields ? req.query.fields.split(',') : [];
    let data = fields.length > 0 ? filterCountryData([generateCountryData(countryData)], fields)[0] : generateCountryData(countryData);

    res.status(200).json(data);
  };
}

module.exports = countryRouteHandler;
