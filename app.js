//access buttons, add click handler
// const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
// const ordinaryUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
// alcohol ingredient type apis

//

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
    // .then(drinks => console.log(drinks))
    .then(response => buildDrinkCard(response.drinks))
}


function buildDrinkCard (drinks) {
  const cardContainer = document.querySelector('.card-container')
    for (let i = 0; i < 10; i++) {
      const drinkCard = document.createElement('div')
      console.log(drinkCard);
      drinkCard.classList.add('card')
      drinkCard.style.width = '18rem'
      cardContainer.appendChild(drinkCard)
      console.log(drinks[i].strDrinkThumb);

      const drinkImg = document.createElement('img')
      drinkCard.appendChild(drinkImg)
      drinkImg.src = drinks[i].strDrinkThumb
      drinkImg.classList.add('card-img-top')

      
      const drinkName = document.createElement('h5')
      drinkName.textContent = drinks[i].strDrink
      drinkName.classList.add('card-title')
      drinkCard.appendChild(drinkName)


    }
}

//do api calls based on 'cocktail' or 'ordinary'

//access alcohol buttons, add click handlers

//perform api search based on ingredient

//render random drinks on screen

//simple logic based on how many of selected drinks

//'it's now five o clock the next day, you just woke up in a ditch'
//'you had too many, you yelled at your mom last night'
