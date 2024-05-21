const express = require('express');
const router = express.Router();

const data = {
  id: "78",
  name: "India",
  iso: {
    numeric: "356",
    alpha_2: "IN",
    alpha_3: "IND",
  },
  domain: ".in",
  calling_codes: {
    country_code: ["91"],
    international_prefix: ["00"],
    national_prefix: ["0"],
  },
  flag: {
    emoji: "🇮🇳",
    svg: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ee-1f1f3.svg",
  },
  continent: ["Asia"],
  bordering_countries: [
    "Bangladesh",
    "Bhutan",
    "Myanmar",
    "China",
    "Nepal",
    "Pakistan"
  ],
  languages: {
    official: ["Hindi", "English"],
    widely_spoken: []
  },
  currency: {
    name: "Indian Rupee",
    code: "INR",
    symbol: "₹",
    // coins: [
    //   "0.01",
    //   "0.02",
    //   "0.05",
    //   "0.10"
    // ],
    // banknotes: [
    //   "10",
    //   "20",
    //   "50",
    //   "100",
    //   "200",
    //   "500",
    //   "2000"
    // ],
  },
  capital: ["New Delhi"],
  area: {
    sq_km: {
      value: "3,287,590",
      unit: "km<sup>2</sup>",
    },
    sq_mi: {
      value: "1,269,345",
      unit: "mi<sup>2</sup>",
    },
    global_percentage: {
      value: "2.0",
      unit: "%",
    }
  },
  population: {
    prefix: "~",
    value: "1,428.6",
    unit: "million",
    global_percentage: {
      value: "17.76",
      unit: "%",
    }
  },
  emergency_services: {
    police: "112",
    ambulance: "112",
    fire: "112",
  },
  tap_water: {
    datasets: {
      data: [18.30],
    },
    max_value: "100",
    global_rank: {
      value: "141",
    }
  },
  vaccinations: {
    most_travellers: {
      value: [
        "Hepatitis A",
        "Tetanus",
        "Typhoid"
      ],
    },
    some_travellers: {
      value: [
        "Yellow fever",
        "Polio",
        "Cholera",
        "Hepatitis B",
        "Japanese encephalitis",
        "Rabies",
        "Tuberculosis"
      ],
    } 
  },
  internet_speed: {
    prefix: "median",
    mobile: {
      download: {
        value: "54.05",
        unit: "Mbps",
      },
      upload: {
        value: "7.57",
        unit: "Mbps",
      },
      latency: {
        value: "29",
        unit: "ms",
      }
    },
    broadband: {
      download: {
        value: "54.56",
        unit: "Mbps",
      },
      upload: {
        value: "49.39",
        unit: "Mbps",
      },
      latency: {
        value: "6",
        unit: "ms",
      },
    },
    global_rank: {
        mobile: {
          value: "43",
        },
        broadband: {
          value: "87",
        },
    }
  },
  socket_types: {
    type: [
      "c",
      "d",
      "m",
    ],
    svg: [
      "https://api.countrywise.io/resources/images/socket-types/socket-type-c.svg",
      "https://api.countrywise.io/resources/images/socket-types/socket-type-d.svg",
      "https://api.countrywise.io/resources/images/socket-types/socket-type-m.svg",
    ],
    parameters: {
      voltage: {
        value: "230",
        unit: "V",
      },
      frequency: {
        value: "50",
        unit: "Hz",
      }
    },
    compatibility: [
      "Type E and F plugs will also fit in type C sockets",
      "No alternative plugs will also fit in type D sockets",
      "No alternative plugs will also fit in type M sockets",
    ],
  },
  tipping: {
    prefix: "Generally",
    value: "expected",
    suffix: "mandatory or at least usual"
  },
  religions: {
    value: ["Hinduism"],
    labels: ["Hinduism 79.5%", "Islam 14.4%", "Christianity 2.5%", "Other 3.6%"],
    datasets: {
      data: [79.5, 14.4, 2.5, 3.6],
    }
  },
  driving_side: {
    value: "left",
  },
  crime_index: {
    datasets: {
      data: [5.75],
    },
    max_value: "10",
    global_rank: {
      value: "61",
      suffix: "The higher the rank, the safer the country is",
    }
  },
  lgbtq_index: {
    datasets: {
      data: [65],
    },
    max_value: "100",
    global_rank: {
      value: "40",
    }
  },
  cannabis: {
    recreational: {
      value: "Illegal, but exception is made for the use of bhang",
    },
    medical: {
      value: "CBD oil legal, less than 0.3% THC",
    },
    data: ["2", "2"]
  },
  textual: {
    intro: [
      "India, located in South Asia, is a country of astounding diversity, rich history, and cultural depth. It's the seventh-largest country by land area and the second-most populous, offering a unique blend of landscapes from the Himalayan peaks to the Indian Ocean coastline. Known for its many ethnic groups, languages, and traditions, India is a mosaic of unique experiences, from architectural wonders like the Taj Mahal to the bustling streets of Mumbai.",
    ],
    history: [
      "India's history is one of the world's oldest and most diverse, characterized by dynasties, empires, and a rich tapestry of cultural and philosophical developments. It was a central part of the ancient Silk Road trade. The country was under British colonial rule from the mid-19th century until its independence in 1947, led by figures like Mahatma Gandhi. This complex history has shaped India's multifaceted society.",
    ],
    climate: [
      "India's climate varies dramatically from the Himalayan north to the tropical south. It generally experiences three major seasons. A hot, humid summer from March to June. A monsoon season with heavy rains from July to September and a cooler winter from October to February. The best time to visit depends mainly on the regions being explored and personal preferences.",
    ],
    currency: [
      "The Indian Rupee (INR) is the currency of India. While major cities and tourist areas widely accept credit cards, cash is essential in rural and remote areas. ATMs are widespread, but carrying some money as a backup is advisable.",
    ],
    cuisine: [
      "Indian cuisine is renowned globally for its rich flavours and diversity, with each region offering distinct dishes. Staples include rice, lentils, and a variety of breads such as naan and roti. Spices are a vital feature of Indian cooking. The country's culinary offerings are endless, from street food like samosas and chaat to elaborate curries and sweets.",
    ],
    language: [
      "India is a linguistically diverse country, with Hindi and English recognized as official languages. Additionally, there are 21 other officially recognized languages, including Bengali, Tamil, and Telugu. English is widely spoken in urban areas and among the educated population.",
    ],
    culture: [
      "Indian culture is a blend of various religions, traditions, and practices. It is the birthplace of Hinduism, Buddhism, Jainism, and Sikhism. The country's rich cultural heritage is evident in its festivals, dance, music, and art. Indian cinema, particularly Bollywood, is a significant part of popular culture.",
    ],
    politics: [
      "India is the world's largest democracy, with a federal parliamentary democratic republic framework. The country has made significant economic and technological strides in recent decades yet faces regional disparities and population growth challenges. For travellers, staying informed about local news is essential, as political and social situations can vary across different regions.",
    ],
  },
};

module.exports = { router, data };
