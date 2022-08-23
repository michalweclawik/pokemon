import {
    pokemonArray
} from './data/pokemon.js'

const cardContainermain = document.querySelector(".card-container");


const showCard = () => {
    pokemonArray.forEach(card => {
        const singleCard = document.createElement("div");
        singleCard.classList.add('card');
        singleCard.innerHTML = `<img class="card__image" src=${card.sprite}>`
        const cardContent = document.createElement("div");
        singleCard.classList.add('card__content')
        cardContent.innerHTML = `<h5 class = "card__heading"> ${card.name} </h5> 
            <p class = "card__text">${card.name} (#${card.id}) is a ${card.types } type pokemon.</p>`
        singleCard.appendChild(cardContent)
        cardContainermain.appendChild(singleCard);
    });
}

showCard()