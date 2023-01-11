// https://us1.locationiq.com/v1/reverse?key=pk.2c085512e92b77926302553605893114&lat=9.0765&lon=7.3986&format=json


//////////
// https://us1.locationiq.com/v1/reverse?key={accss_key}&lat={latitude}&lon={longitude}&format=json
//////////

const request = require('postman-request');

const getCountry = (latitude, longitude, temperature, description, address, humidity, visibility, weather, callBackFn) => {
    const access_key = 'pk.2c085512e92b77926302553605893114';

    const countryURL = `https://us1.locationiq.com/v1/reverse?key=${access_key}&lat=${latitude}&lon=${longitude}&format=json`;


    request({ url: countryURL, json: true }, (error, response, body) => {
        if (error) {
            callBackFn('Unable to find location', undefined);
        } else {
            callBackFn(undefined, {
                country: body.address.country,
                temperature,
                description,
                address,
                humidity,
                visibility,
                weather

            });

        }
    })
}

// getCountry(9.0765, 7.3986, (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }

// });

module.exports = getCountry;