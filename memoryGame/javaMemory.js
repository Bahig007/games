const cardArray = [
    {
        name: 'fries' ,
        img: 'images/fries.png'
    } , 
    {
        name: 'ice-cream' ,
        img: 'images/ice-cream.png'
    } ,
    {
        name: 'milkshake' ,
        img: 'images/milkshake.png'
    } , 
    {
        name: 'pizza' ,
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger' ,
        img: 'images/cheeseburger.png'
    } ,
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    } ,
    {
        name: 'fries' ,
        img: 'images/fries.png'
    } , 
    {
        name: 'ice-cream' ,
        img: 'images/ice-cream.png'
    } ,
    {
        name: 'milkshake' ,
        img: 'images/milkshake.png'
    } , 
    {
        name: 'pizza' ,
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger' ,
        img: 'images/cheeseburger.png'
    } ,
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    } 

] ;

cardArray.sort( () => 0.5 - Math.random()) ;

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardChosenIds = [];
const cardWon = [];
function cardDisplay () {
    for ( let i = 0; i < cardArray.length; i++) {
       const card = document.createElement('img');
       card.setAttribute('src', 'images/blank.png');
       card.setAttribute('data-id',i)
       gridDisplay.appendChild(card)
       card.addEventListener('click', cardFlipper)
       
    }
}
cardDisplay ()
function  checkMatch () {

       const cards = document.querySelectorAll('img');

    if (cardChosenIds[0] == cardChosenIds[1]){
        alert('you have clicked the same card twice')
        
    }

    if (cardChosen[0] == cardChosen[1]) {
        alert('You have found a match!')
        cards[cardChosenIds[0]].setAttribute('src' , 'images/white.png')
        cards[cardChosenIds[1]].setAttribute('src' , 'images/white.png')
        cards[cardChosenIds[0]].removeEventListener('click', cardFlipper)
        cards[cardChosenIds[1]].removeEventListener('click', cardFlipper)
        cardWon.push(cardChosen)
    } else {
        cards[cardChosenIds[0]].setAttribute('src' , 'images/blank.png')
        cards[cardChosenIds[1]].setAttribute('src' , 'images/blank.png')
        alert ('sorry try again')
    }
    resultDisplay.textContent = cardWon.length;
    cardChosen = [];
    cardChosenIds = [];

    if (cardWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Awesome you found them all"
    }
}
function cardFlipper () {
    const cardId = this.getAttribute('data-id'
    );
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src' , cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout (checkMatch , 500 )
    }  ;
    
}