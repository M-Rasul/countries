'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const test = "test";
// console.log(`This is ${test}`);
// setTimeout(() => {
//     console.log('halo wold');
// }, 3000);
// console.log("and it will keep running");
const getCountry = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    request.addEventListener('load', () => {
        console.log(JSON.parse(request.responseText));
        const data = JSON.parse(request.responseText)[0];
        const keyLang = Object.keys(data.languages)[0];
        const keyCur = Object.keys(data.currencies)[0];
        const html = `
        <article class="country">
            <img class="country__img" src=${data.flags.png} />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.continents[0]}</h4>
                <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)} mln</p>
                <p class="country__row"><span>🗣️</span>${data.languages[keyLang]}</p>
                <p class="country__row"><span>💰</span>${data.currencies[keyCur].name}</p>
            </div>
        </article>
        `
        countriesContainer.insertAdjacentHTML("afterbegin", html);
        countriesContainer.style.opacity = 1;
    })
}
getCountry('usa');
getCountry('brazil');
getCountry('russia');
getCountry('ukraine');