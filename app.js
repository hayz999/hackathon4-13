//access buttons, add click handler
// const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
// const ordinaryUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
// alcohol ingredient type apis
const ginUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin'
const vodkaUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'
const tequilaUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila'
const rumUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'

const cocktailPartyButton = document.querySelector('.beach-party-button')
const beachPartyButton = document.querySelector('.cocktail-party-button')
//cocktail party
const ginButton = document.querySelector('.gin-button')
const vodkaButton = document.querySelector('.vodka-button')
//beach party
const tequilaButton = document.querySelector('.tequila-button')
const rumButton = document.querySelector('.rum-button')

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
  ginButton.classList.add('hidden')
  vodkaButton.classList.add('hidden')
})

vodkaButton.addEventListener('click', function () {
  apiSearch(vodkaUrl)
  ginButton.classList.add('hidden')
  vodkaButton.classList.add('hidden')
})

tequilaButton.addEventListener('click', function () {
  apiSearch(tequilaUrl)
  tequilaButton.classList.add('hidden')
  rumButton.classList.add('hidden')
})

rumButton.addEventListener('click', function () {
  apiSearch(rumUrl)
  tequilaButton.classList.add('hidden')
  rumButton.classList.add('hidden')
})

function apiSearch (url) {
    fetch(url)
    .then(response => response.json())
    .then(drinks => console.log(drinks))
}

//do api calls based on 'cocktail' or 'ordinary'

//access alcohol buttons, add click handlers

//perform api search based on ingredient

//render random drinks on screen

//simple logic based on how many of selected drinks

//'it's now five o clock the next day, you just woke up in a ditch'
//'you had too many, you yelled at your mom last night'
