const axios = require("axios");

const pokemonArray = [];
const rand1 = Math.ceil(Math.random() * 151);
const rand2 = Math.ceil(Math.random() * 151);
const rand3 = Math.ceil(Math.random() * 151);

//Below is an asynchronous, promise-based axios request chain that is requesting three random pokemon and adding them to our pokemonArray variable.
function getPokemon() {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
    .then(res => pokemonArray.push(res.data))
    .catch(err => console.log(err));
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
    .then(res => pokemonArray.push(res.data))
    .catch(err => console.log(err));
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
    .then(res => pokemonArray.push(res.data))
    .catch(err => console.log(err));
}

// STEP 1:
// Without accounting for error handling, convert the above .then( ) chain into async/await syntax below

// STEP 2:
// Now use a try/catch block to account for error handling for the code above. Also, implement the following console.log( ) in a finally block to check your pokemonArray length: console.log(`we have ${pokemonArray.length} Pokemon in our pokemonArray`)


//DO NOT TOUCH THE CODE BELOW:
getPokemon();
