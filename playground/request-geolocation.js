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
    const latitude = body.results[0].locations[0].latLng.lat;
    const longitude = body.results[0].locations[0].latLng.lng;

    console.log(`Address: ${body.results[0].locations[0].street}`);
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
    console.log(`--------------------------------`);
    console.log(JSON.stringify(response, null, 2));
    console.log(`--------------------------------`);
    console.log(JSON.stringify(error, null, 2));
  }
);
