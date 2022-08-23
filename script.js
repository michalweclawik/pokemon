import {
    pokemonArray
} from './data/pokemon.js'

const cardContainermain = document.querySelector(".card-container");



const showCard = () => {
    // pokemonArray = pokemonArray.map(object => {
    //     let str = object.name
    //     str = str.charAt(0).toUpperCase() + str.slice(1);
    //     console.log(str)
    //     return str;
    // })

    console.log(pokemonArray)

    pokemonArray.forEach(card => {
        const singleCard = document.createElement("div");
        singleCard.classList.add('card');
        singleCard.innerHTML = `<img class="card__image" src=${card.sprite}>`

        const cardContent = document.createElement("div");
        cardContent.classList.add('card__content');

        cardContent.innerHTML = `<h5 class = "card__heading"> ${card.name} </h5> 
            <p class = "card__text">${(card.name)} (#${card.id}) is a ${card.types } type pokemon.</p>`


        cardContainermain.appendChild(singleCard);
        singleCard.appendChild(cardContent);
    });
}

showCard()