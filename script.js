import {
    pokemonArray
} from './data/pokemon.js'

const cardContainermain = document.querySelector(".card-container");



const showCard = () => {



    console.log(pokemonArray)

    pokemonArray.forEach(card => {
        let capitalFirstLeter = card.name.charAt(0).toUpperCase() + card.name.slice(1);

        const singleCard = document.createElement("div");
        singleCard.classList.add('card');
        singleCard.innerHTML = `<img class="card__image" src=${card.sprite}>`

        const cardContent = document.createElement("div");
        cardContent.classList.add('card__content');

        cardContent.innerHTML = `<h5 class = "card__heading"> ${capitalFirstLeter} </h5> 
            <p class = "card__text">${capitalFirstLeter} (#${card.id}) is a ${card.types } type pokemon.</p>`


        cardContainermain.appendChild(singleCard);
        singleCard.appendChild(cardContent);
    });
}

showCard()