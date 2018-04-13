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
//drink
const buttonContainer = document.querySelector('.button-container')
const cardContainer = document.querySelector('.card-container')
let drunkStatus = ''
let drinkQty = 0


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
    .then(addButtonClickEvent)
}


function buildDrinkCard (drinks) {
    for (let i = 1; i < 9; i++) {
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
      inputField.id = i
      drinkCard.appendChild(inputField)

      const drinkButton = document.createElement('a')
      drinkButton.classList.add('btn', 'btn-primary', 'drink-button')
      drinkButton.href = '#'
      drinkButton.textContent = 'Drink'
      drinkButton.id = i
      drinkCard.appendChild(drinkButton)
    }
}

function addButtonClickEvent (event) {
    const drinkButtonsArray = document.getElementsByTagName('a')
    const drinkQuantity = document.getElementsByTagName('input')
    for (let i = 0; i < drinkButtonsArray.length; i++) {
        drinkButtonsArray[i].addEventListener('click', function (event) {
            updateDrunkStatus(event)
            cardContainer.classList.remove('card-container')
            cardContainer.classList.add('hidden', 'background-img')
        })
    }
}

function updateDrunkStatus (event) {
    if (event.target.previousSibling.value <= 5) {
        drunkStatus = 'tipsy'
        getGiphy(tispyUrl)
        console.log(drunkStatus)
    } else if (event.target.previousSibling.value > 5 && event.target.previousSibling.value <= 10) {
        drunkStatus = 'drunk AF'
        getGiphy(drunkAFUrl)
        console.log(drunkStatus)
    } else {
        drunkStatus = 'wasted'
        getGiphy(wastedUrl)
        console.log(drunkStatus)
    }
    return drunkStatus
}

function getGiphy (url) {
    fetch(url)
    .then(response => response.json())
    .then(createGiph)
}

function createGiph (response) {
    console.log(response.data)
    const body = document.querySelector('.giph-container')
    const randomIndex = Math.floor(Math.random() * 26)
    console.log(randomIndex)
    const giphContainer = document.createElement('div')
    body.appendChild(giphContainer)
    const giph = document.createElement('img')
    giph.src = response.data[randomIndex].images.downsized_large.url
    giph.classList.add('giph-img')
    giphContainer.appendChild(giph)
    const heading = document.createElement('h1')
    heading.textContent = `You're ${drunkStatus}...`
    heading.classList.add('giph-heading')
    giphContainer.appendChild(heading)
}
