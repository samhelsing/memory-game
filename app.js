

const cardsArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
]
 let flipArray = []
 let flipArrayId = []
 const cardsWon = [] 

const cardsData = cardsArray.sort(() => 0.5- Math.random())

const gridDisplay = document.querySelector('#grid')
const resultsDisplay = document.getElementById('results')

function createBoard(){
    for(let i=0; i<cardsArray.length; i++){
        const cards = document.createElement('img')
        cards.setAttribute('src', 'images/blank.png')
        cards.setAttribute('data-id', i)
        cards.addEventListener('click', underCards)
        gridDisplay.appendChild(cards)
      
    }
}
    createBoard()

    
function checkMatch() {
  const option1Id = flipArrayId[0]
  const option2Id = flipArrayId[1]
  const cards = document.querySelectorAll('img')
  if(option1Id == option2Id){
    cards[option1Id].setAttribute('src', 'images/blank.png')
    cards[option2Id].setAttribute('src', 'images/blank.png')
    alert('you clicked the same image')

  }
  if(flipArray[0] == flipArray[1]){
    cards[option1Id].setAttribute('src', 'images/white.png')
    cards[option2Id].setAttribute('src', 'images/white.png')
    cards[option1Id].removeEventListener('click', underCards)
    cards[option2Id].removeEventListener('click', underCards)
    cardsWon.push(flipArray)
  }
else{
  cards[option1Id].setAttribute('src', 'images/blank.png')
  cards[option2Id].setAttribute('src', 'images/blank.png')
}
flipArray = []
flipArrayId = []
if(cardsWon.length == cardsArray.length/2){
  resultsDisplay.innerHTML = 'you won'
}
}

function underCards(){
    const cardId = this.getAttribute('data-id')
    console.log(cardId)
    flipArray.push(cardsArray[cardId].name)
    flipArrayId.push(cardId)
    console.log(flipArray)
    this.setAttribute('src', cardsArray[cardId].img)
    if(flipArray.length ===2){
      setTimeout(checkMatch, 500)
    }
    // flipArray.push(flipId)
    
}

