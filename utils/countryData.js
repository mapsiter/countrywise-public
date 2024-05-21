// Generate country data from each country routes
function generateCountryData(countryData) {
  return {
    "id": countryData.id,
    "name": countryData.name,
    "iso": {
      "numeric": countryData.iso.numeric,
      "alpha_2": countryData.iso.alpha_2,
      "alpha_3": countryData.iso.alpha_3,
    },
    "domain": countryData.domain,
    "calling_codes": {
      "country_code": countryData.calling_codes.country_code,
      "international_prefix": countryData.calling_codes.international_prefix,
      "national_prefix": countryData.calling_codes.national_prefix,
    },
    "flag": {
        "emoji": countryData.flag.emoji,
        "svg": countryData.flag.svg,
    },
    "continent": countryData.continent,
    "bordering_countries": countryData.bordering_countries,
    "languages": {
      "official": countryData.languages.official,
      "widely_spoken": countryData.languages.widely_spoken,
    },
    "currency": {
      "name": countryData.currency.name,
      "code": countryData.currency.code,
      "symbol": countryData.currency.symbol,
      "coins": countryData.currency.coins,
      "banknotes": countryData.currency.banknotes,
    },
    "capital": countryData.capital,
    "area": {
      "sq_km": {
        "value": countryData.area.sq_km.value,
        "unit": countryData.area.sq_km.unit,
      },
      "sq_mi": {
        "value": countryData.area.sq_mi.value,
        "unit": countryData.area.sq_mi.unit,
      },
      "global_percentage": {
        "value": countryData.area.global_percentage.value,
        "unit": countryData.area.global_percentage.unit,
      },
    },
    "population": {
      "prefix": countryData.population.prefix,
      "value": countryData.population.value,
      "unit": countryData.population.unit,
      "global_percentage": {
        "value": countryData.population.global_percentage.value,
        "unit": countryData.population.global_percentage.unit,
      },
    },
    "emergency_services": {
      "police": countryData.emergency_services.police,
      "ambulance": countryData.emergency_services.ambulance,
      "fire": countryData.emergency_services.fire,
    },
    "tap_water": {
      "prefix": countryData.tap_water.prefix,
      "value": countryData.tap_water.value,
      "suffix": countryData.tap_water.suffix,
    },
    "vaccinations": {
      "most_travellers": {
        "value": countryData.vaccinations.most_travellers.value,
      },
      "some_travellers": {
        "value": countryData.vaccinations.some_travellers.value,
      },
    },
    "internet_speed": {
      "prefix": countryData.internet_speed.prefix,
      "mobile": {
        "download": {
          "value": countryData.internet_speed.mobile.download.value,
          "unit": countryData.internet_speed.mobile.download.unit,
        },
        "upload": {
          "value": countryData.internet_speed.mobile.upload.value,
          "unit": countryData.internet_speed.mobile.upload.unit,
        },
        "latency": {
          "value": countryData.internet_speed.mobile.latency.value,
          "unit": countryData.internet_speed.mobile.latency.unit,
        },
      },
      "broadband": {
        "download": {
          "value": countryData.internet_speed.broadband.download.value,
          "unit": countryData.internet_speed.broadband.download.unit,
        },
        "upload": {
          "value": countryData.internet_speed.broadband.upload.value,
          "unit": countryData.internet_speed.broadband.upload.unit,
        },
        "latency": {
          "value": countryData.internet_speed.broadband.latency.value,
          "unit": countryData.internet_speed.broadband.latency.unit,
        },
      },
      "global_rank": {
        "mobile": {
          "value": countryData.internet_speed.global_rank.mobile.value,
        },
        "broadband": {
          "value": countryData.internet_speed.global_rank.broadband.value,
        },
      },
    },
    "socket_types": {
      "type": countryData.socket_types.type,
      "svg": countryData.socket_types.svg,
      "parameters": {
        "voltage": {
          "value": countryData.socket_types.parameters.voltage.value,
          "unit": countryData.socket_types.parameters.voltage.unit,
        },
        "frequency": {
          "value": countryData.socket_types.parameters.frequency.value,
          "unit": countryData.socket_types.parameters.frequency.unit,
        },
      },
      "compatibility": countryData.socket_types.compatibility,
    },
    "tipping": {
      "prefix": countryData.tipping.prefix,
      "value": countryData.tipping.value,
    },
    "religions": {
      "value": countryData.religions.value,
      "labels": countryData.religions.labels,
      "datasets": [{
        "data": countryData.religions.datasets.data,
      }]
    },
    "driving_side": {
      "value": countryData.driving_side.value,
    },
    "crime_index": {
      "datasets": [{
        "data": countryData.crime_index.datasets.data,
      }],
      "max_value": countryData.crime_index.max_value,
      "global_rank": {
        "value": countryData.crime_index.global_rank.value,
        "suffix": countryData.crime_index.global_rank.suffix,
      }
    },
    "lgbtq_index": {
      "datasets": [{
        "data": countryData.lgbtq_index.datasets.data,
      }],
      "max_value": countryData.lgbtq_index.max_value,
      "global_rank": {
        "value": countryData.lgbtq_index.global_rank.value,
      }
    },
    "cannabis": {
      "recreational": {
        "value": countryData.cannabis.recreational.value,
      },
      "medical": {
        "value": countryData.cannabis.medical.value,
      },
      "data": countryData.cannabis.data,
    },
    "textual": {
      "intro": countryData.textual.intro,
      "history": countryData.textual.history,
      "climate": countryData.textual.climate,
      "currency": countryData.textual.currency,
      "cuisine": countryData.textual.cuisine,
      "language": countryData.textual.language,
      "culture": countryData.textual.culture,
      "politics": countryData.textual.politics,
    },
  };
}

module.exports = generateCountryData;
