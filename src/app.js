const express = require('express');
const geoCode = require('./APIs/geocode');
const getCountry = require('./APIs/country');
const getCountryFlag = require('./APIs/countryFlag');
const path = require('path');




const app = express();
app.set('view engine', 'hbs');


// portConfig
const port = 2000;

// Rendering Static
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
app.set('views', viewsPath);
app.use(express.static(publicDirectory));


app.get('/', (req, res) => {
    res.render('index');

});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send('<h1>Invalid address....input a correct location!</h1>')
    }
    geoCode(req.query.address, (error, data) => {
        if (error) {
            console.log('Error', error);
        } else {
            // console.log(data);

            getCountry(data.latitude, data.longitude, data.temperature, data.description, data.address, data.humidity, data.visibility, data.weather, (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    // console.log(data);

                    getCountryFlag(data.country, data.temperature, data.description, data.address, data.humidity, data.visibility, data.weather, (error, data) => {
                        if (error) {
                            console.log(error);
                        } else {
                            res.send({
                                country: data.country,
                                temperature: data.temperature,
                                description: data.description,
                                address: data.address,
                                flag: data.flag,
                                humidity: data.humidity,
                                visibility: data.visibility,
                                weather: data.weather

                            })
                            console.log(data);
                        }


                    });
                }

            });
        }

    });

})

app.get('*', (req, res) => {
    res.send('<h1>Page not Found</h1>');
});




// geoCode('alabama', (error, data) => {
//     console.log('ERROR:::::::::>', error);
//     console.log('Data:::::::::>', data);
// });





app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
})