const ginUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'
const vodkaUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'
const tequilaUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila'
const rumUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'

//End of Game Links

const tispyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=eqCVsQwt3p8gIz1RU9wbKIz2BMneYYqD&q=tipsy&limit=25&offset=0&rating=R&lang=en'
const drunkAFUrl = 'https://api.giphy.com/v1/gifs/search?api_key=eqCVsQwt3p8gIz1RU9wbKIz2BMneYYqD&q=drunk af&limit=25&offset=0&rating=R&lang=en'
const wastedUrl = 'https://api.giphy.com/v1/gifs/search?api_key=eqCVsQwt3p8gIz1RU9wbKIz2BMneYYqD&q=wasted&limit=25&offset=0&rating=R&lang=en'

const cocktailPartyButton = document.querySelector('.cocktail-party-button')
const beachPartyButton = document.querySelector('.beach-party-button')
//cocktail party
const ginButton = document.querySelector('.gin-button')
const vodkaButton = document.querySelector('.vodka-button')
//beach party
const tequilaButton = document.querySelector('.tequila-button')
const rumButton = document.querySelector('.rum-button')
const buttonContainer = document.querySelector('.button-container')
//drink
let drunkStatus = ''
const drinkButtonArray = document.getElementsByTagName('a')


cocktailPartyButton.addEventListener('click', function () {
    beachPartyButton.classList.add('hidden')
    cocktailPartyButton.classList.add('hidden')
    ginButton.classList.remove('hidden')
    vodkaButton.classList.remove('hidden')
})

beachPartyButton.addEventListener('click', function () {
    beachPartyButton.classList.add('hidden')
    cocktailPartyButton.classList.add('hidden')
    tequilaButton.classList.remove('hidden')
    rumButton.classList.remove('hidden')
})

ginButton.addEventListener('click', function () {
  apiSearch(ginUrl)
  buttonContainer.classList.remove('button-container')
  ginButton.classList.add('hidden')
  vodkaButton.classList.add('hidden')
})

vodkaButton.addEventListener('click', function () {
  apiSearch(vodkaUrl)
  buttonContainer.classList.remove('button-container')
  ginButton.classList.add('hidden')
  vodkaButton.classList.add('hidden')
})

tequilaButton.addEventListener('click', function () {
  apiSearch(tequilaUrl)
  buttonContainer.classList.remove('button-container')
  tequilaButton.classList.add('hidden')
  rumButton.classList.add('hidden')
})

rumButton.addEventListener('click', function () {
  apiSearch(rumUrl)
  buttonContainer.classList.remove('button-container')
  tequilaButton.classList.add('hidden')
  rumButton.classList.add('hidden')
})

function apiSearch (url) {
    fetch(url)
    .then(response => response.json())
    .then(response => buildDrinkCard(response.drinks))
    // .then(addButtonClickEvent)
}


function buildDrinkCard (drinks) {
  const cardContainer = document.querySelector('.card-container')
    for (let i = 0; i < 12; i++) {
      const drinkCard = document.createElement('div')
      drinkCard.classList.add('card', 'card-body')
      drinkCard.style.width = '18rem'
      cardContainer.appendChild(drinkCard)

      const drinkImg = document.createElement('img')
      drinkCard.appendChild(drinkImg)
      drinkImg.src = drinks[i].strDrinkThumb
      drinkImg.classList.add('card-img-top')

      const drinkName = document.createElement('h5')
      drinkName.textContent = drinks[i].strDrink
      drinkName.classList.add('card-title')
      drinkCard.appendChild(drinkName)

      const quantity = document.createElement('h6')
      quantity.textContent = 'Qty.'
      quantity.classList.add('card-title')
      drinkCard.appendChild(quantity)

      const inputField = document.createElement('input')
      inputField.classList.add('input-field')
      drinkCard.appendChild(inputField)

      const drinkButton = document.createElement('a')
      drinkButton.classList.add('btn', 'btn-primary', 'drink-button')
      drinkButton.href = '#'
      drinkButton.textContent = 'Drink'
      drinkCard.appendChild(drinkButton)
    }
    console.log(drinkButtonArray)
}

// function addButtonClickEvent (drinkButtons) {
//     for (let i = 0; i < drinkButtons.length; i++) {
//         console.log(drinkButtons[i])
//     }
// }

function setDrunkStatus () {
    console.log('test')
}
