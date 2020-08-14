#Cat-Matched Testing Details

- moved the setTimeout from mismatched into unflipCards:

- 

## Testing

### Development of project

This project was due in November, 2019. However, it has taken nearly ten months to complete. It was 

### User Stories Testing



1) **As an older adult with minimum IT skills (who likes cats), I want to be able to understand the rules of the game quickly, and to have access to the rules whenever I don't remember without massively interrupting my game-play.**

The rules for the game pop up as soon as you open the site. Once you are playing the game, there is a clearly marked 'how to play' button which does not interfere with the gameplay.

2) **As a user, I want to not have to go through too many menu options or a complicated interface to reach the game. Minimum clicks possible.**

As soon as the player enters the site, they are able to choose their difficulty level and start playing immediately. There is therefore only one click prior to gameplay beginning.

3) **As a user, I want to have an interface that isn't too fancy and doesn't have lots of animations. I want something functional, as I just want to play my game.**

The color scheme and background image were selected in order not to distract from gameplay. There are no animations and the focus is on playing the game. 


4) **As a user, I want to have some measure of how I'm doing in the game in comparison to the last round, but nothing too stressful.**

Unfortunately I was unable to meet this user story. In future, I would like to implement a feature where scores are recorded and users are able to access their previous score (the number of moves made).

5) **As a user, I want to be able to challenge myself, maybe with higher difficulty levels.**

There are three difficulty levels in the game, so the user is able to play with more cards if he/she wants to be challenged.



6) **As a user, I want to smile when I turn each card over, because the image is cute and I want to see cats.**

Cat images were specially selected to be cute and endearing from a series of illustration on Pixabay.

7) **As a user, I want to have the option to know who made the game and contact them if need be.**

In the footer, there is an email address to directly contact the developer. 


### Manual Testing

Throughout the project, whenever a new function was created it was manually tested with console logs and via checking the developer tools.



### Validators

The following validators were used to check the code:

**HTML**
- [W3C HTML Validator](https://validator.w3.org) - Overall the HTML validator was great and I used it to test all of my pages. However, it doesn't recognise the Jinja templating so it pulled up a lot of errors for the Jinja and I had to disregard those.

**CSS**
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - Generally this worked great in terms of making sure there were no major errors in the CSS. It did pick up one error, where it said that the media queries are deprecated. I searched for the latest documentation but could not find anything substantial online. Due to the heavy time-boxing of the project, I decided to leave this as media queries were only really used for the hero images and once the appropriate documentation is found it should be a quick fix, but I didn't want to delay submission based on this.


### Known Issues

- There is currently a bug in the game where if you click the cards too quickly, one of the cards gets stuck. Various code was implemented in order to address this, but the bug still remains unresolved. Here were some of the attempts. Please note indentation is not included in code here in the testing file:

1) I tried to implement a boolean around the event listener & the functions that controlled the card flipping so that the next card could not be clicked before the first function was done running, like so:

let userCanClick = true;

function displayCard() {
    
    if (userCanClick){
       
        userCanClick = false;
       
        if (counter == 0) {
        
            counter = 1;

            this.children[0].classList.remove('hidden');

            this.children[0].classList.add('show-img');

            card1 = this.children[0];
        
        } else if (counter == 1) {
            
            counter = 2;
            
            console.log(counter)
            
            this.children[0].classList.remove('hidden');
            
            this.children[0].classList.add('show-img');
            
            card2 = this.children[0];
           
            checkForMatch();
            
            counter = 0;
        
        }
        
        userCanClick = true;
   
    }

This did not work. We also tried creating one function for all the event listeners, as maybe the multiple listeners were interfering:

function aggregator(e){
    
    console.log(e)
    
    let card=e.target
    
    displayCard(card);
    
    countScore();

}

cardElementsArray[i].addEventListener('click',(e)=> aggregator(e))

We also tried to change the setTimeout:

function mismatched() {
    
    setTimeout(unflipCards, 1);

}

These were three of the attempts that were made and were unsuccessful. I have tried many variations of these and as of yet am unable to solve the issue, so have decided to leave it for now as the project is very overdue and come back to it.


- Currently the footer does not stick to the bottom of the page. I have experimented with the two solutions below but have as of yet been unsuccessful. 

[StackOverflow](https://stackoverflow.com/questions/16679146/force-footer-on-bottom-on-pages-with-little-content/50659635#50659635)

[MatthewJamesTaylor](https://matthewjamestaylor.com/bottom-footer)


