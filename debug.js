//first, create array for all images
//second, shuffle images
//create and append images in shuffled order

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
let cardElements = document.getElementsByClassName('card');
let cardElementsArray = [...cardElements];



function createImages(){
    //create images

    // counter
    var i = 0;

    // shuffle array

    shuffle(allImages);

    // start preloading
    for(i=0; i<allImages.length; i++)
    {
        var imageObj = document.createElement('img');
        imageObj.style.width ="100px";
        imageObj.style.height ="100px";
        imageObj.src=allImages[i];
        cardElementsArray[i].appendChild(imageObj);
    }

    console.log(allImages[i]);



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
        createImages();
    }, 1200);
}