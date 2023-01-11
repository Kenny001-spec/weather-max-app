const request = require('postman-request');



// const accessKey = `5fc1fa7e8c959e07627eb255c5300858`;

// const lat = `37.8267`;
// const lng = `-122.4233`;

// WeatherStack data
// const baseURL = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${lat},${lng},`;

// request(baseURL, ((error, response, body) => {
//     const data = JSON.parse(body);
//     console.log(data);
// }))


// OpenWeather data;

const geoCode = (address, callBackFn) => {
    const accessKey = `782617f539e792101d28d0012e4a800f`;
    // const city = 'barcelona';

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${accessKey}`;

    request({ url: url, json: true }, ((error, _, body) => {
        // const data = JSON.parse(body);
        // console.log(data);
        if (error) {
            callBackFn('Errror: Unable to connect!', undefined);

        } else if (body.length === 0) {
            console.log('Unable to find location... try again')

        } else {
            const { temp, feels_like } = body.main;
            callBackFn(undefined, body)
            // callBackFn(undefined, `The temperature is ${Math.trunc(temp)} degree celcius`);
            // console.log(`The temperature is ${Math.trunc(temp)} but it feels like its ${Math.trunc(feels_like)}`);
        }

        // console.log(temp);
        // console.log(feels_like);

        // console.log(body.main.temp);
        // console.log(body.main.feels_like);

    }));
}
module.exports = geoCode;

// http://api.weatherstack.com/current?access_key=5fc1fa7e8c959e07627eb255c5300858&query=37.8267,122.4233;






