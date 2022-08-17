// CATAPI:
// CatAPI docs url: https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
// Cat API key: 7b5f98ae-8857-4f17-8dd4-2e4efa503daf
const catApiUrl = 'https://api.thecatapi.com/v1/images/search';
var catPicBtn = document.getElementById('get-cat-button');
var catBox = document.querySelector('.cat-box');
var catPicElement = document.createElement('img');



window.onload = function init() {
    
}

var getCatPicButtonHandler = function (event) {
    event.preventDefault();
    
    catPicElement.textContent = '';
    getRandomCat();
}


// get cat pic function:
var getRandomCat = function() {
    fetch(catApiUrl)
    .then(function (response) {
        if (response.ok) {
            console.log(response);
            return response.json();
        }
    })
    .then(function(data) {
        console.log(data);
        let catImgUrl = data[0].url;
        console.log(data[0].url);
        displayCat(data);
    })

}

var displayCat = function(data) {
    let catImgUrl = data[0].url;
    catPicElement.setAttribute('src', catImgUrl);
    catBox.appendChild(catPicElement);
}

const catResult = document.getElementById('cat-result');
 


catPicBtn.addEventListener('click', getCatPicButtonHandler);
