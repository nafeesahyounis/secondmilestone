//first, create array for all images
//second, shuffle images
//create and append images in shuffled order
//create an empty array. For easy level, 4 cards are selected from the original array and put into the new array. The array is then
//duplicated and both arrays are combined and shuffled.

//create images
var allImages = [
    "island.png",
    "cat-reading.png",
    "cuty-cats.png",
    "sleeping-kitty.png",
    "little-cat.png",
    "cat.png",
    "pirate.png",
    "ship.png",

];

var selection=[];
let cardElements = document.getElementsByClassName('card');
let cardElementsArray = [...cardElements];
var button = document.getElementById('test-button');

//add event listener to button
function startGame(){
    button.addEventListener('click',changeLevel);
}

//cut the array and put only 4 cards into the selection array, duplicate those cards into a new array, concat both arrays into
//a new array - this new array will be used in the createImages function
function changeLevel(){

    for(i=0; i<cardElementsArray.length; i++){
    cardElementsArray.innerHTML="";
    }
    console.log(cardElementsArray);
    shuffle(allImages);
    var selection1=allImages.slice(0,4);
    var selection2=selection1.slice(0,4);
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
    console.log(images);
    console.log(images.length)
    // start preloading
    for(i=0; i<images.length; i++)
    {
        var imageObj = document.createElement('img');
        imageObj.style.width ="100px";
        imageObj.style.height ="100px";
        imageObj.src=images[i];
        cardElementsArray[i].appendChild(imageObj);
    }

    console.log(images[i]);



}

function createOneImage(){
    var myImage = new Image(100, 200);
    myImage.src = 'cat.png';
    document.body.appendChild(myImage);
    var anotherImage = new Image(100, 200);
    anotherImage.src = 'pirate.png';
    document.body.appendChild(anotherImage);
}

//shuffle Images

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


window.onload = function () {
    setTimeout(function() {
        startGame();
    }, 1200);
}