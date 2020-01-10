

//game variables

let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];
let easyElements = document.getElementsByClassName('easy-card');
let easyElementsArray = [...easyElements];

let imgElements = document.getElementsByClassName('game-card-img');
let imgElementsArray = [...imgElements];
let easyCards = document.getElementsByClassName('easy');
let easyArray = [...easyCards];

var counter = 0;
var card1;
var card2;
var score = 0;
var totalGameMoves=document.getElementById('totalGameMoves');
var restartButton = document.getElementById('restartButton');
var easyButton= document.getElementById('easy-button');
var mediumButton= document.getElementById('medium-button');
var mediumRow=document.getElementById('row-medium');
var easyRow=document.getElementById('row-easy');

var hardButton= document.getElementById('hard-button');
var hardRow=document.getElementById('row-hard');




//start game
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;


}

function shuffleImages(){

    var shuffledImages = shuffle(easyArray);
    console.log(shuffledImages);
    for(i=0; i<shuffledImages.length; i++) {
//add the shuffled images to each card
        easyElements[i].appendChild(shuffledImages[i])};


}

function shuffleAllImages(){
    var shuffledImages = shuffle(imgElementsArray);
    console.log(shuffledImages);
    for(i=0; i<shuffledImages.length; i++) {
//add the shuffled images to each card
        imgElements[i].appendChild(shuffledImages[i])};

}
//restart game when restart button is clicked


    restartButton.addEventListener('click',restartGame);

function restartGame(){

    for (let i = 0; i < imgElementsArray.length; i++) {
    imgElementsArray[i].classList.remove('show-img');}
    if (score>=1){
        score=0;
        totalGameMoves.innerHTML=score;
    }
    startGame();
    //if(mediumRow.classList.contains("hidden")){
     //   shuffleImages();
    //    shuffleAllImages();
    //}
    if(hardRow.classList.contains("hidden")){
        console.log("apple")
    }

}

//display cards when game starts and initiate move counter
function startGame() {

    for (let i = 0; i < cardElementsArray.length; i++) {
        cardElementsArray[i].addEventListener('click', displayCard)
        cardElementsArray[i].addEventListener('click', countScore)

    }
}

function displayCard() {
    if (counter==0){
        counter=1;
        this.children[0].classList.add('show-img');
        card1=this.children[0];
    }
   else if (counter==1){
        counter=2;
        this.children[0].classList.add('show-img');
        card2=this.children[0];
        checkForMatch();
        counter=0;
    }






}

//counter goes up one every time you click a card

function countScore() {
    score++;
    totalGameMoves.innerHTML=score;
}



function checkForMatch() {

       if (card1.src==card2.src){
           console.log("match");
           match();
       }
    else{
        console.log("mismatch");
        mismatched();
       }
}
// make sure that when cards flip back over there is a 1 second delay so that player can see both cards. Also initialise 'unflip'
function mismatched(){
    setTimeout(unflipCards,1000);
}

//if two cards have the same src element, remove Event Listener
function match(){
    card1.parentElement.removeEventListener('click',displayCard);
    card2.parentElement.removeEventListener('click',displayCard);
}

//un-flip cards that don't match
function unflipCards(){
    card1.classList.remove('show-img');
    card2.classList.remove('show-img');
}


//change difficulty selection


easyButton.addEventListener('click', changeToEasy);


function changeToEasy(){
    mediumRow.classList.add('hidden');
    hardRow.classList.add('hidden');

    //this will later be used in the shuffle function so that we can shuffle cards based on whether or not they have hidden in their classList
    if(easyRow.classList.contains("house")){
        console.log("shoe");
    }

    if (score>=1){
        score=0;
        totalGameMoves.innerHTML=score;
    }
    restartGame();
}

    mediumButton.addEventListener('click', changeToMedium);


function changeToMedium(){
    mediumRow.classList.remove('hidden');
    hardRow.classList.add('hidden');
    if (score>=1){
        score=0;
        totalGameMoves.innerHTML=score;
    }
    let imgElementsArray = [...imgElements];
}
hardButton.addEventListener('click', changeToHard);


function changeToHard(){
    mediumRow.classList.remove('hidden');
    hardRow.classList.remove('hidden');
    hardRow.classList.add('shuffle');
    if (score>=1){
        score=0;
        totalGameMoves.innerHTML=score;
    }
}


window.onload = function () {
        setTimeout(function() {
        startGame();
        shuffleImages();
    }, 1200);
}