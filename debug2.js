function Monster(image,NORMAL,SCARED,state) {
      this.image = image;
      this.NORMAL = NORMAL;
      this.SCARED = SCARED;
      this.state = state;
      this.render = function (){
          //go to current state
          switch(this.state)
          {
              case this.NORMAL:
              drawingSurface.drawImage(

              monsterImage,
               0, 0, 64, 64,
              0, 0, 64, 64);
          break;
          case this.SCARED:
        drawingSurface.drawImage
        (
          monsterImage,
          64, 0, 64, 64,
          0, 0, 64, 64);

          }
        }
    }
var monster2 = new Monster ("animals.png", 0, 1, 0);
 //Set up the canvas and drawing surface
    var canvas = document.querySelector("canvas");
    var drawingSurface = canvas.getContext("2d");

//render monster2
var monsterImage = new Image();
 monsterImage.addEventListener("load", monster2.render, false);
  monsterImage.src = monster2.image;
    //Change the monster's state by pressing and releasing a key
   window.addEventListener("click", keydownHandler, false);
   window.addEventListener("keyup", keyupHandler,false);

  function keydownHandler(event){
        //when a key is pressed, change monster's state to SCARED

        monster2.state = monster2.SCARED;
        monster2.render();


   function keyupHandler(event){
       monster2.state = monster2.NORMAL;
     monster2.render();

    }
  }
