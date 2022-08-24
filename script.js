import {
    pokemonArray
} from './data/pokemon.js'


let clonePokemon = [...pokemonArray];
const cardContainermain = document.querySelector(".card-container");
const userInput = document.querySelector(".search");
const resetButton = document.querySelector(".resetbutton");





//Challnge part 1 
const showCard = (array) => {

    array.forEach(pokemon => {
        let capitalFirstLeter = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        const singleCard = document.createElement("div");
        singleCard.classList.add('card');

        singleCard.innerHTML = `<img class="card__image" src=${pokemon.sprite}>`

        const cardContent = document.createElement("div");
        cardContent.classList.add('card__content');

        cardContent.innerHTML = `<h5 class = "card__heading"> ${capitalFirstLeter} </h5> 
            <p class = "card__text">${capitalFirstLeter} (#${pokemon.id}) is a ${pokemon.types } type pokemon.</p>`


        cardContainermain.appendChild(singleCard);
        singleCard.appendChild(cardContent);
    });
}
showCard(clonePokemon)

//chalenge 2


const search = () => {
    cardContainermain.innerHTML = '';
    let searchPokemon = userInput.value.toLowerCase()

    let filteredPokemon = clonePokemon.filter((pokemon) => pokemon.name.toLowerCase() == searchPokemon);
    showCard(filteredPokemon)
}
const refresh = () => {
    cardContainermain.innerHTML = '';
    showCard(clonePokemon)
}

userInput.addEventListener("blur", search);
resetButton.addEventListener("click", refresh)