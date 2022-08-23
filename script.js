import {
    pokemonArray
} from './data/pokemon.js'

const cardContainer = document.querySelector(".card-container");


const showCard = () => {
    pokemonArray.forEach(card => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add('card-container')


    });
}