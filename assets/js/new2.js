//step 0: every time easy, medium or hard are clicked the arrays are reset and existing cards are deleted>> so maybe push cards out of array&add new cards in>>all[];selection[];
//step1: create an array with all the image names eg cat.png etc, only one occurrence of each name
//step2:select a number of card names depending on the level that has been clicked on> create an array that takes randomly x amount of images
//step2.5: write a function that generates the game cards>> as many cards as you have images in the array using a for loop
//step3: fill the cards with images

//game variables
//game-card for all images. Images are appended to this.
let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];


//this array contains all of the images
var allImages = [
    "assets/images/island.png",
    "assets/images/cat-reading.png",
    "assets/images/cuty-cats.png",
    "assets/images/sleeping-kitty.png",
    "assets/images/little-cat.png",
    "assets/images/cat.png",
    "assets/images/pirate.png",
    "assets/images/ship.png",

];

//an empty array that the images will be placed in, depending on the difficulty level. So 4 images for easy,6 images for medium and 8 for
//hard. This will change depending on which button is clicked (see changeLevel function)
var selection=[];

//these variables will be used to match the cards
var counter = 0;
var card1;
var card2;

//these variables will be used to keep track of how many moves have been made
var score = 0;
var totalGameMoves=document.getElementById('totalGameMoves');
var restartButton = document.getElementById('restartButton');
var playAgainButton = document.getElementById('playAgain');
var easyButton= document.getElementById('easy-button');
var modalEasyButton= document.getElementById('modal-easy-button');

var mediumButton= document.getElementById('medium-button');
var modalMediumButton= document.getElementById('modal-medium-button');

//array for medium cards to be used when changing levels.
var mediumRow=document.getElementsByClassName('row-medium');
let mediumRowArray = [...mediumRow];
var easyRow=document.getElementsByClassName('row-easy');

var hardButton= document.getElementById('hard-button');
var modalHardButton= document.getElementById('modal-hard-button');

var hardRow=document.getElementsByClassName('row-hard');
let hardRowArray = [...hardRow];

var numberOfImages;
var numberOfMatches = 0;

//add event listeners to the difficulty buttons both in the game and modal in order to ascertain how many cards will appear and be shuffled
easyButton.addEventListener('click', changeToEasy);
modalEasyButton.addEventListener('click',changeToEasy);

function changeToEasy(){

    for (let i = 0; i < mediumRowArray.length; i++) {
        mediumRowArray[i].classList.add('hidden');}
    for (let i = 0; i < hardRowArray.length; i++) {
        hardRowArray[i].classList.add('hidden');}



         changeLevel(0,4)




    if (score>=1){
        score=0;
        totalGameMoves.innerHTML=score;
    }
    console.log(selection.length)
}

mediumButton.addEventListener('click', changeToMedium);
modalMediumButton.addEventListener('click', changeToMedium);



function changeToMedium(){
    for (let i = 0; i < mediumRowArray.length; i++) {
        mediumRowArray[i].classList.remove('hidden');}
    for (let i = 0; i < hardRowArray.length; i++) {
        hardRowArray[i].classList.add('hidden');}
    //mediumRow.classList.remove('hidden');
    //hardRow.classList.add('hidden');
    changeLevel(0,6);

    if (score>=1){
        score=0;
        totalGameMoves.innerHTML=score;
    }
}

hardButton.addEventListener('click', changeToHard);
modalHardButton.addEventListener('click', changeToHard);


function changeToHard(){

    for (let i = 0; i < mediumRowArray.length; i++) {
        mediumRowArray[i].classList.remove('hidden');}
    for (let i = 0; i < hardRowArray.length; i++) {
        hardRowArray[i].classList.remove('hidden');}



    changeLevel(0,8)




    if (score>=1){
        score=0;
        totalGameMoves.innerHTML=score;
    }
}

//select and shuffle cards based on difficulty level
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
//cut the array and put only 4 cards into the selection array, duplicate those cards into a new array, concat both arrays into
//a new array - this new array will be used in the createImages function
function changeLevel(x,y){

    for(i=0; i<cardElementsArray.length; i++){
        cardElementsArray[i].innerHTML="";
    }
    console.log(cardElementsArray);
    shuffle(allImages);
    var selection1=allImages.slice(x,y);
    var selection2=selection1.slice(x,y);
    var selection = selection1.concat(selection2);
    console.log(selection);
    shuffle(selection);

    createImages(selection);
    
}

function createImages(images){
    //create images

    // counter
    var i = 0;

    // shuffle array

    shuffle(images);
    
    // start preloading
    for(i=0; i<images.length; i++)
    {
        var imageObj = document.createElement('img');
        imageObj.style.width ="100%";
        imageObj.style.height ="100%";
        imageObj.src=images[i];
        cardElementsArray[i].appendChild(imageObj);
        imageObj.classList.add('hidden');


    }

    numberOfImages=images.length;


startGame();



}


//restart game depending on the level when restart button is clicked


restartButton.addEventListener('click',restartGame);
playAgainButton.addEventListener('click',restartGame);

function restartGame(){
    if (numberOfImages===8){
        changeToEasy();
    }
    if (numberOfImages===12){
        changeToMedium();
    }
    if (numberOfImages===16){
        changeToHard();
    }

}

   

//display cards when game starts and initiate move counter
function startGame() {

    for (let i = 0; i < cardElementsArray.length; i++) {
        cardElementsArray[i].addEventListener('click', displayCard)
        cardElementsArray[i].addEventListener('click', countScore)
        cardElementsArray[i].addEventListener('click', flipEvent)


    }

}

function flipEvent(){
    console.log(this)
            this.children[0].classList.add('animated', 'flipInY');


}





function displayCard() {
    console.log(this);
    if (counter==0){
        counter=1;
        this.children[0].classList.remove('hidden');
        this.children[0].classList.add('show-img');
        card1=this.children[0];
    }
   else if (counter==1){
        counter=2;
        this.children[0].classList.remove('hidden');
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
           numberOfMatches = numberOfMatches+1
            console.log(numberOfMatches)
           match();
       }
    else{
        console.log("mismatch");
        mismatched();
       }
       youHaveWon();
}

//functionality added to announce you've won

function youHaveWon(){
    if ((numberOfImages/2) === numberOfMatches){
        console.log(numberOfImages/2)
        console.log(numberOfMatches)
        $('#exampleModal').modal('show')
    //reset counter for next game play
        numberOfMatches = 0;

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
    card1.classList.add('hidden');

    card2.classList.remove('show-img');
    card2.classList.add('hidden');

}


//change difficulty selection






//hardButton.addEventListener('click', changeToHard);


//function changeToHard(){
//    mediumRow.classList.remove('hidden');
//hardRow.classList.remove('hidden');
//    hardRow.classList.add('shuffle');

//    startGame();
//    for (let i = 0; i < imgElementsArray.length; i++) {
//        imgElementsArray[i].classList.remove('show-img');}
//    if (score>=1){
//        score=0;
//        totalGameMoves.innerHTML=score;
//    }
//    shuffleImages();
//}


window.onload = function () {
        setTimeout(function() {
        startGame();
    }, 1200);
}