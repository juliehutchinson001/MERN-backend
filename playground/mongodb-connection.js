const request = require('request');
const secretKey = require('../middleware/secret-keys');

const googleKey = secretKey.googleMapKey;
const location = '2859%20ne4th%20street%20florida';

request(
  {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${googleKey}&location=${location}`,
    json: true,
  },
  (error, response, body) => {
    console.log(JSON.stringify(response, null, 2));
  }
);
