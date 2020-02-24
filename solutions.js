const axios = require("axios");

//DO NOT TOUCH CODE BELOW
const pokemonArray = [];
const rand1 = Math.ceil(Math.random() * 151);
const rand2 = Math.ceil(Math.random() * 151);
const rand3 = Math.ceil(Math.random() * 151);
//DO NOT TOUCH CODE ABOVE

//Below is a function containing asynchronous, promise-based axios requests that are requesting three random pokemon and adding them to our pokemonArray variable.
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
// Without accounting for error handling, convert the above .then()s into async/await syntax below

// async function getPokemon() {
//   let firstPokemon = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${rand1}`
//   );
//   let secondPokemon = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${rand2}`
//   );
//   let thirdPokemon = await axios.get(
//     `https://pokeapi.co/api/v2/pokemon/${rand3}`
//   );
//   pokemonArray.push(firstPokemon.data, secondPokemon.data, thirdPokemon.data);
// }

// STEP 2:
// Now use a try/catch block to account for error handling for the code above.
// Then, implement the following console.log( ) in a finally block to check your pokemonArray length: 
// console.log(`we have ${pokemonArray.length} Pokemon in our pokemonArray`)

// async function getPokemon() {
//   try {
//     let firstPokemon = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${rand1}`
//     );
//     let secondPokemon = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${rand2}`
//     );
//     let thirdPokemon = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${rand3}`
//     );
//     pokemonArray.push(firstPokemon.data, secondPokemon.data, thirdPokemon.data);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log(`we have ${pokemonArray.length} Pokemon in our pokemonArray`);
//   }
// }

//DO NOT TOUCH THE CODE BELOW:
getPokemon();
