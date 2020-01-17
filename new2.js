

//game variables
//game-card for all images. Images are appended to this.
let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];
//game-card for only easy images. Easy images are appended to this.
let easyElements = document.getElementsByClassName('easy-card');
let easyElementsArray = [...easyElements];
//array for all images, also used when shuffling at difficulty level 'hard' because it involves all cards
let imgElements = document.getElementsByClassName('game-card-img');
let imgElementsArray = [...imgElements];
//array for only easy-level images
let easyCards = document.getElementsByClassName('easy');
let easyArray = [...easyCards];
//array for medium level images
let mediumCards= document.getElementsByClassName("medium");
let mediumArray = [...mediumCards];
let mediumElements = document.getElementsByClassName('medium-card');

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

function reload(){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "new2.js";
    document.getElementsByTagName("head")[0].appendChild(script);
}


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
//shuffle easy images
function shuffleImages(){

    var shuffledImages = shuffle(easyArray);
    console.log(shuffledImages);
    for(i=0; i<shuffledImages.length; i++) {
//add the shuffled images to each card
        easyElements[i].appendChild(shuffledImages[i]);
        console.log(easyElements[i].appendChild(shuffledImages[i]));
    }
}
//shuffle medium images
function shuffleMediumImages(){
    var shuffledImages = shuffle(mediumElementsArray);
    console.log(shuffledImages);
    for(i=0; i<shuffledImages.length; i++) {
//add the shuffled images to each card
        mediumElements[i].appendChild(shuffledImages[i])};

}
//shuffle all three sets of images for maximum difficulty level
function shuffleAllImages(){
    var shuffledImagesHard = shuffle(imgElementsArray);
    console.log(shuffledImagesHard);
    for(i=0; i<shuffledImagesHard.length; i++) {
//add the shuffled images to each card
        cardElements[i].appendChild(shuffledImagesHard[i])};
        debugger;

}
//restart game when restart button is clicked


    //restartButton.addEventListener('click',restartGame);

//function restartGame(){

    //for (let i = 0; i < imgElementsArray.length; i++) {
    //imgElementsArray[i].classList.remove('show-img');}
    //if (score>=1){
    //    score=0;
    //    totalGameMoves.innerHTML=score;
   // }
   // startGame();
    //if(mediumRow.classList.contains("hidden")){
     //   shuffleImages();
    //    shuffleAllImages();
    //}
   // if(hardRow.classList.contains("shuffle")){
    //   shuffleAllImages();
    //   hardRow.classList.remove('shuffle');
    //}
    //if(easyRow.classList.contains("shuffle")) {
   //     shuffleImages();
  //  }

//}

//display cards when game starts and initiate move counter
function startGame() {

    for (let i = 0; i < cardElementsArray.length; i++) {
        cardElementsArray[i].addEventListener('click', displayCard)
        cardElementsArray[i].addEventListener('click', countScore)

    }

    console.log(cardElementsArray);
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



    console.log(card1,card2);


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

    reload();
    mediumRow.classList.add('hidden');
    hardRow.classList.add('hidden');
    //hardRow.classList.remove('shuffle');
    //mediumRow.classList.remove('shuffle')
    //easyRow.classList.add('shuffle');



    //this will later be used in the shuffle function so that we can shuffle cards based on whether or not they have hidden in their classList
    if(easyRow.classList.contains("house")){
        console.log("shoe");
    }


    startGame();
    for (let i = 0; i < imgElementsArray.length; i++) {
    imgElementsArray[i].classList.remove('show-img');}
    if (score>=1){
       score=0;
        totalGameMoves.innerHTML=score;
     }
    shuffleImages();
}

    mediumButton.addEventListener('click', changeToMedium);


function changeToMedium(){
    mediumRow.classList.remove('hidden');
    hardRow.classList.add('hidden');
    mediumRow.classList.add('shuffle');

    if (score>=1){
        score=0;
        totalGameMoves.innerHTML=score;
    }
}
hardButton.addEventListener('click', changeToHard);


function changeToHard(){
    mediumRow.classList.remove('hidden');
    hardRow.classList.remove('hidden');
    hardRow.classList.add('shuffle');

    startGame();
    for (let i = 0; i < imgElementsArray.length; i++) {
        imgElementsArray[i].classList.remove('show-img');}
    if (score>=1){
        score=0;
        totalGameMoves.innerHTML=score;
    }
    shuffleAllImages();
}


window.onload = function () {
        setTimeout(function() {
        startGame();
        shuffleImages();
    }, 1200);
}