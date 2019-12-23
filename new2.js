

//game variables

let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];
let imgElements = document.getElementsByClassName('game-card-img');
let imgElementsArray = [...imgElements];
var counter = 0;
var card1;
var card2;
var restartButton= document.getElementById('restartButton');


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

var shuffledImages = shuffle(imgElementsArray);
console.log(shuffledImages);
    for(i=0; i<shuffledImages.length; i++) {
//add the shuffled images to each card
        cardElements[i].appendChild(shuffledImages[i])};

}

function restart(){
    function shuffleUnflip(){
        shuffleImages();
        unflipCards();
    }
    restartButton.addEventListener('click',shuffleUnflip);
}

function startGame(){

   for(let i = 0; i < cardElementsArray.length; i++){
        cardElementsArray[i].addEventListener('click',displayCard)
   }}

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





window.onload = function () {
    setTimeout(function() {
        startGame()
        shuffleImages();
        restart();
    }, 1200);
}