

//game variables

let cardElements = document.getElementsByClassName('game-card');
let cardElementsArray = [...cardElements];
let imgElements = document.getElementsByClassName('game-card-img');
let imgElementsArray = [...imgElements];
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

//if two cards have the same src element, remove Event Listener
function match(){
    card1.parentElement.removeEventListener('click',displayCard);
    card2.parentElement.removeEventListener('click',displayCard);
}
function flipCards(){
    card1.classList.remove('show-img');
    card2.classList.remove('show-img');
}





window.onload = function () {
    setTimeout(function() {
        startGame()
    }, 1200);
}