$(document).ready(function () {
    // API Project:

    const quoteApiUrl = 'https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random/';
    var getQuoteBtn = document.getElementById('get-quote-button');
    var quoteBox = document.querySelector('#quote-box');
    var quoteTextElement = document.createElement('h3'); 
    var quoteAuthorElement = document.createElement('p');

    const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
    var catPicBtn = document.getElementById('get-cat-button');
    var catBox = document.querySelector('.cat-box');
    var catPicElement = document.createElement('img');


    // button handlers:
    var getQuoteBtnHandler = function(event) {
        event.preventDefault();

        quoteBox.textContent = '';
        getRandomQuote();
    }


    var getCatPicBtnHandler = function (event) {
        event.preventDefault();

        catPicElement.textContent = '';
        getRandomCat();
    }


    // get quote function:
    var getRandomQuote = function() {
        fetch(quoteApiUrl)
        .then(function(response) {
            if (response.ok) {
                console.log(response);
                return response.json();
            }
        })
        .then(function (data) {
            console.log(data);
            console.log(data[0]);
            console.log(data[0].q);
            console.log(data[0].h);
            displayQuote(data);
        })
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

    // display quote:
    var displayQuote = function (data) {
        var quoteText = data[0].q;
        quoteTextElement.innerText = quoteText;
        quoteBox.appendChild(quoteTextElement);

        var quoteAuthor = data[0].a;
        quoteAuthorElement.innerText = ' ~ ' + quoteAuthor;
        quoteTextElement.appendChild(quoteAuthorElement);
    }



    // display cat:
    var displayCat = function (data) {
        let catImgUrl = data[0].url;
        catPicElement.setAttribute('src', catImgUrl);
        catBox.appendChild(catPicElement);
    }

    var init = function () {
        getRandomQuote();
        getRandomCat();
    }

    getQuoteBtn.addEventListener('click',getQuoteBtnHandler);
    catPicBtn.addEventListener('click', getCatPicBtnHandler);

    init();

})




