const request = require('postman-request');
const countryName = 'Nigeria';
const url = `https://restcountries.com/v2/name/${countryName}`;

request({ url: url, json: true }, ((error, _, body) => {
    console.log(body);
}));





