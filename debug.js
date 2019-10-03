
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

var monster1 = new Monster ("monsterStates.png", 0, 1, 0);
 //Set up the canvas and drawing surface
    var canvas = document.querySelector("canvas");
    var drawingSurface = canvas.getContext("2d");
    //Load the monster's image
    var monsterImage = new Image();
    monsterImage.addEventListener("load", monster1.render, false);
    monsterImage.src = monster1.image;
    //Change the monster's state by pressing and releasing a key
    window.addEventListener("click", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler,false);

    function keydownHandler(event){
        //when a key is pressed, change monster's state to SCARED

        monster1.state = monster1.SCARED;
        monster1.render();
    }

    function keyupHandler(event){
        monster1.state = monster1.NORMAL;
        monster1.render();
    }