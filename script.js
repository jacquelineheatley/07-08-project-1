$(document).ready(function () {
    // API Project:

    const factsApiUrl = 'https://meowfacts.herokuapp.com/';
    var getFactBtn = document.getElementById('get-fact-button');
    var factBox = document.querySelector('#fact-box');
    var factTextElement = document.createElement('h3');
    var factAuthorElement = document.createElement('p');

    const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
    var catPicBtn = document.getElementById('get-cat-button');
    var catBox = document.querySelector('.cat-box');
    var catPicElement = document.createElement('img');


    // button handlers:
    var getFactBtnHandler = function (event) {
        event.preventDefault();

        factBox.textContent = '';
        getRandomFact();
    }


    var getCatPicBtnHandler = function (event) {
        event.preventDefault();

        catPicElement.textContent = '';
        getRandomCat();
    }


    // get quote function:
    var getRandomFact = function () {
        fetch(factsApiUrl)
            .then(function (response) {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
            })
            .then(function (data) {
                console.log(data.data[0]);
                displayFacts(data);
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
                console.log(data[0].url);
                displayCat(data);
            })

    }

    // display fact:
    var displayFacts = function (data) {
        var factText = data.data[0];
        factTextElement.innerText = factText;
        factBox.appendChild(factTextElement);

        factAuthorElement.innerText = '';
        factTextElement.appendChild(factAuthorElement);
    }



    // display cat:
    var displayCat = function (data) {
        let catImgUrl = data[0].url;
        catPicElement.setAttribute('src', catImgUrl);
        catBox.appendChild(catPicElement);
        catPicElement.style.width = 'auto';
        catPicElement.style.height = '480px';
        catPicElement.style.padding = '35px';
    }

    //document.querySelector('button').onclick = function() {
    //    var image = document.getElementById(cat-box-img);
    //    image.style.width = '150px';
    //    image.style.height = '150px';
    //}

    var init = function () {
        getRandomFact();
        getRandomCat();
    }

    getFactBtn.addEventListener('click', getFactBtnHandler);
    catPicBtn.addEventListener('click', getCatPicBtnHandler);

    init();

})

// code for local storage
function test() {
    // value data
    var uid = document.getElementById("username").value;
    var pw = document.getElementById("password");
    var email = document.getElementById("email").value;

    // set data
    var user = localStorage.setItem("uid", uid);
    var pass = localStorage.setItem("pw", pw);
    var em = localStorage.setItem("email", email);

    // get stored data 
    var user = localStorage.getItem("uid", uid);
    var pass = localStorage.getItem("pw", pw);
    var em = localStorage.getItem("email", email);

    var a, b, c;
    a = "username";
    b = "password";
    c = "email";

    if (a == user && b == pass && c == em) {
        console.log("email", email);
        console.log("uid", uid);
        console.log("pw", pw);
    }
    else {
        console.log("email", email);
        console.log("uid", uid);
        console.log("pw", pw);
    }
}