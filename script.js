$(document).ready(function () {
    // CATAPI:
    // CatAPI docs url: https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
    // Cat API key: 7b5f98ae-8857-4f17-8dd4-2e4efa503daf
    const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
    var catPicBtn = document.getElementById('get-cat-button');
    var catBox = document.querySelector('.cat-box');
    var catPicElement = document.createElement('img');





    var getCatPicButtonHandler = function (event) {
        event.preventDefault();

        catPicElement.textContent = '';
        getRandomCat();
    }


    // get cat pic function:
    var getRandomCat = function () {
        fetch(catApiUrl)
            .then(function (response) {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
            })
            .then(function (data) {
                console.log(data);
                let catImgUrl = data[0].url;
                console.log(data[0].url);
                displayCat(data);
            })

    }

    var displayCat = function (data) {
        let catImgUrl = data[0].url;
        catPicElement.setAttribute('src', catImgUrl);
        catBox.appendChild(catPicElement);
    }

    var init = function () {
        getRandomCat();
    }

    catPicBtn.addEventListener('click', getCatPicButtonHandler);

    init();

})

//quoteAPI
//quoteAPI URL 'https://zenquotes.io/api/quotes/[your_key]'
//api key 14506d27052981f35f38ed5d841efd2077a96c16
const quoteApiUrl = 'https://zenquotes.io/api/quotes/';
    var quoteButton = document.getElementById('get-quote-btn');
    var quoteApi = document.querySelector('.quote-api');
    var quoteElement = document.createElement('qte')



    var getQuoteButtonHandler = function (event) {
        event.preventDefault();

        quoteElement.textContent = '';
        getRandomQuote();
    }


    // get quote function:
    var getRandomQuote = function () {
        fetch(quoteApiUrl)
            .then(function (response) {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
            })
            .then(function (data) {
                console.log(data);
                let quoteApiUrl = data[0].url;
                console.log(data[0].url);
                displayQuote(data);
            })

    }

    var displayQuote = function (data) {
        let quoteApiUrl = data[0].url;
        quoteElement.setAttribute('src', quoteUrl);
        quoteApi.appendChild(quoteElement);
    }

    var init = function () {
        getRandomQuote();
    }

    quoteButton.addEventListener('click', getQuoteButtonHandler);

    init();







