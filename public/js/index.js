// const express = require('express');
console.log('This is Javascript from Client-side....wow👀');

/// http://localhost:2000/weather?address=ilorin

const formEl = document.querySelector('form');
const inputEl = document.querySelector('.inputSearch');
const cityEl = document.querySelector('.city')
const countryEl = document.querySelector('.country');
const humiditEl = document.querySelector('.humidity--no');
const tempEl = document.querySelector('.temperature');
const flagEl = document.querySelector('.flagImg');
const descriptionEl = document.querySelector('.description');
const weatherEl = document.querySelector('.weather--name');
const visibilityEl = document.querySelector('.visibility--no');
const mainEl = document.querySelector('main');




formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    const address = inputEl.value

    fetch(`http://localhost:2000/weather?address=${address}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                mainEl.classList.remove('hidden');
                cityEl.textContent = data.address;
                countryEl.textContent = data.country;
                tempEl.textContent = Math.trunc(data.temperature);
                descriptionEl.textContent = data.description;
                humiditEl.textContent = data.humidity;
                weatherEl.textContent = data.weather;
                visibilityEl.textContent = (data.visibility / 1000);
                flagEl.src = data.flag;




            }

        })
    })

})



























// const formEl = document.querySelector('form');
// const inputEl = document.querySelector('input');
// const btnSubmit = document.querySelector('button');
// // const search = document.querySelector('input');

// // https://restcountries.com/v2/name/nigeria

// // fetch('https://restcountries.com/v2/name/nigeria').then(response => {
// //     response.json().then(data => {
// //         console.log(data);
// //     })
// // })

// fetch('http://localhost:3000/weather?address=kwara').then(response => {
//     response.json().then(data => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data);
//         }

//     })
// })

// formEl.addEventListener('submit', function (e) {
//     e.preventDefault()
//     // const location = search.value
//     console.log(location);
// })
