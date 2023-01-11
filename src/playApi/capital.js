const request = require('postman-request');

const getCountry = (capitalCity, callBackFn) => {

    const myURL = `https://restcountries.com/v2/capital/${capitalCity}`;

    request({ url: myURL, json: true }, ((error, response, body) => {
        console.log(body[0]);
        if (error) {
            callBackFn('Errror: Unable to connect!', undefined);
            // } else if (response.body.common === 0) {
            //     callBackFn('unable to find location ', undefined)
        } else {
            callBackFn(undefined, {
                country: body[0].name,
                countryCapital: body[0].capital,
                population: body[0].population,
            });
        }

        // callBackFn(undefined, body)

        // console.log('COUNTRY GENERAL NAME:::::::>', body[0].name);
        // console.log('COUNTRY CAPITAL NAME::::::::>', body[0].capital);

        // const { name: countryname, capital: countryCapital, population } = body[0];
        // console.log('country===>', countryname);
        // console.log('capital===>', countryCapital);
        // console.log('population===>', (population / 1000000).toFixed(1));

    }));
}
getCountry('abuja', (error, data) => {
    console.log('ERROR:::::::::>', error);
    console.log('Data:::::::::>', data);
});







