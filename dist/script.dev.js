"use strict";

var _pokemon = require("./data/pokemon.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var clonePokemon = _toConsumableArray(_pokemon.pokemonArray);

var cardContainermain = document.querySelector(".card-container");
var userInput = document.querySelector(".search");
var resetPage = document.querySelector(".resetbutton");

var search = function search() {
  cardContainermain.innerHTML = '';
  var searchPokemon = userInput.value.toLowerCase();
  var filteredPokemon = clonePokemon.filter(function (pokemon) {
    return pokemon.name.toLowerCase() == searchPokemon;
  });
  showCard(filteredPokemon);
};

var showCard = function showCard(array) {
  array.forEach(function (pokemon) {
    var capitalFirstLeter = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    var singleCard = document.createElement("div");
    singleCard.classList.add('card');
    singleCard.innerHTML = "<img class=\"card__image\" src=".concat(pokemon.sprite, ">");
    var cardContent = document.createElement("div");
    cardContent.classList.add('card__content');
    cardContent.innerHTML = "<h5 class = \"card__heading\"> ".concat(capitalFirstLeter, " </h5> \n            <p class = \"card__text\">").concat(capitalFirstLeter, " (#").concat(pokemon.id, ") is a ").concat(pokemon.types, " type pokemon.</p>");
    cardContainermain.appendChild(singleCard);
    singleCard.appendChild(cardContent);
  });
};

showCard(clonePokemon);

var refresh = function refresh() {
  cardContainermain.innerHTML = '';
  showCard(clonePokemon);
};

userInput.addEventListener("blur", search);
resetPage.addEventListener("click", refresh);