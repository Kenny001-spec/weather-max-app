// http://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&appid=782617f539e792101d28d0012e4a800f


/////////
// http://api.openweathermap.org/data/2.5/weather?q={place}&units=metric&appid={access_key}
////////
const request = require('postman-request');

const geoCode = (address, callBackFn) => {
    const access_key = '782617f539e792101d28d0012e4a800f';
    const geoCodeURL = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${access_key}`;

    request({ url: geoCodeURL, json: true }, (error, response, body) => {
        if (error) {
            callBackFn('unable to find location', undefined)
            // console.log(error);
        } else {
            callBackFn(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                description: body.weather[0].description,
                temperature: body.main.temp,
                address: body.name,
                humidity: body.main.humidity,
                visibility: body.visibility,
                weather: body.weather[0].main

            })
        }
        // console.log(body);
    })
}

geoCode('dubai', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }

})

module.exports = geoCode;

