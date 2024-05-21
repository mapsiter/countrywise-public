// Utility function that filters the country data based on the fields specified in the query parameter.
function filterCountryData(countries, fields) {
  return countries.map(country => {
    let filteredCountry = {};
    fields.forEach(field => {
      let [mainField, subField] = field.split('.');
      if (country[mainField]) {
        if (subField) {
          if (country[mainField][subField]) {
            if (!filteredCountry[mainField]) {
              filteredCountry[mainField] = {};
            }
            filteredCountry[mainField][subField] = country[mainField][subField];
          }
        } else {
          filteredCountry[mainField] = country[mainField];
        }
      }
    });
    return filteredCountry;
  });
}

module.exports = filterCountryData;
