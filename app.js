//access buttons, add click handlers
const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
const cocktailPartyButton = document.querySelector('.beach-party-button')
const beachPartyButton = document.querySelector('.cocktail-party-button')

cocktailPartyButton.addEventListener('click', function (event) {
    fetch(cocktailUrl)
    .then(response => response.json())
    .then(drinks => console.log(drinks))
})

//do api calls based on 'cocktail' or 'ordinary'

//access alcohol buttons, add click handlers

//perform api search based on ingredient

//render random drinks on screen

//simple logic based on how many of selected drinks

//'it's now five o clock the next day, you just woke up in a ditch'
//'you had too many, you yelled at your mom last night'