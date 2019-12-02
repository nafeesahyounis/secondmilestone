

//game variables

let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];
let imgElements = document.getElementsByClassName('game-card-img');
let imgElementsArray = [...imgElements];
let openedCards = [];
let hasFlippedCard = true;
let firstCard, secondCard;
var counter = 0;
var card1;
var card2;


//start game

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

function mismatched(){
    setTimeout(flipCards,1000);
}
function match(){
    card1.parentElement.removeEventListener('click',displayCard);
    card2.parentElement.removeEventListener('click',displayCard);
}
function flipCards(){
    card1.classList.remove('show-img');
    card2.classList.remove('show-img');
}
//if two cards have the same data-attribute, remove event listener

/*function disableCards() {
    firstCard.removeEventListener('click', displayCard);
    secondCard.removeEventListener('click', displayCard);
}

/*function cardOpen(card){
    openedCards.push(card);
    let len = openedCards.length;

}

//if two cards have the same data-attribute, remove event listener

function disableCards() {
    firstCard.removeEventListener('click', displayCard);
    secondCard.removeEventListener('click', displayCard);
}

/*function cardOpen(card){
    openedCards.push(card);
    let len = openedCards.length;
    if(len >2) {
        openedCards[i].addEventListener('click',unflip);
        function unflip(){

            openedCards[i].classList.remove('show-img');

        }

    }
}


function unflip(){
    for(i=0; i<len; i++) {
            openedCards[i].children[0].classList.remove("show-img")
    /*openedCards[0].classList.remove("show-img", "open");
    openedCards[1].classList.remove("show-img", "open");
    openedCards[0].classList.add("game-card-img");
    openedCards[1].classList.add("game-card-img");
    }

}
function matched() {
    openedCards[0].classList.add("match");
    openedCards[1].classList.add("match");
    openedCards[0].classList.remove("show", "open");
    openedCards[1].classList.remove("show", "open");
    matchedCards.push(openedCards[0]);
    matchedCards.push(openedCards[1]);
    openedCards = [];
    if(matchedCards.length == 16) {
        endGame();
    }
}

function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        openedCards[0].children[0].classList.remove('show-img');
        openedCards[1].children[0].classList.remove('show-img');
        enable();
        openedCards = [];

    }, 1100) */



window.onload = function () {
    setTimeout(function() {
        startGame()
    }, 1200);
}