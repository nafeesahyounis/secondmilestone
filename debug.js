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
    imageObj = new Image(100,200);


    // start preloading
    for(i=0; i<=3; i++)
    {
        imageObj.src=allImages[i];
    }

    console.log(allImages[i]);

    document.body.appendChild(allImages[i]);

}

function createOneImage(){
    var myImage = new Image(100, 200);
    myImage.src = 'cat.png';
    document.body.appendChild(myImage);
}

window.onload = function () {
    setTimeout(function() {
        createImages();
    }, 1200);
}