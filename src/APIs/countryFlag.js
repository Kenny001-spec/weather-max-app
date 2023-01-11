// https://restcountries.com/v2/name/country

///////
// https://restcountries.com/v2/name/nigeria
///////

const request = require('postman-request');


const getCountryFlag = (country, temperature, description, address, humidity, visibility, weather, callBackFn) => {


    const countryFlagURL = `https://restcountries.com/v2/name/${country}`;

    request({ url: countryFlagURL, json: true }, (error, response, body) => {
        // console.log(body);
        if (error) {
            callBackFn('Unable to find location', undefined);
        } else {
            callBackFn(undefined, {
                country: body[0].cioc,
                flag: body[0].flags.png,
                temperature,
                description,
                address,
                humidity,
                visibility,
                weather
            })
        }
    })
}

// getCountryFlag('Nigeria', (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }


// });

module.exports = getCountryFlag;