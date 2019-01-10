const request = require('request');

request(
  {
    url:
      'http://www.mapquestapi.com/geocoding/v1/address?key=zubofZfHuhsCmRNSpU8OCerCezwAeXDf&location=2859%20ne4th%20street%20florida',
    json: true,
  },
  (error, response, body) => {
    console.log(JSON.stringify(response, null, 2));
  }
);
