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


function createImages(){
    //create images

    // counter
    var i = 0;

    // create object



    // start preloading
    for(i=0; i<=3; i++)
    {
        var imageObj = document.createElement('img');
        imageObj.style.width ="100px";
        imageObj.style.height ="100px";
        imageObj.src=allImages[i];
        document.body.appendChild(imageObj);
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

window.onload = function () {
    setTimeout(function() {
        createImages();
    }, 1200);
}