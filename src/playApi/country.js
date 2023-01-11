const request = require('postman-request');

const abjLant = 9.0765;
const abjLong = 7.3986;

const access_token = 'pk.2c085512e92b77926302553605893114';
const locationURL = `https://us1.locationiq.com/v1/reverse?key=${access_token}&lat=${abjLant}&lon=${abjLong}&format=json`

request({ url: locationURL, json: true }, ((error, response, body) => {
    // console.log(body);

    const { country: countryname, state: countryState, postcode } = body.address;
    console.log('country===>', countryname);
    console.log('state===>', countryState);
    console.log('postCode===>', postcode);
}));

// https://us1.locationiq.com/v1/reverse?key=pk.2c085512e92b77926302553605893114&lat=9.0765&lon=7.3986&format=json