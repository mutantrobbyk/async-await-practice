const axios = require("axios");

//DO NOT TOUCH CODE BELOW
const pokemonArray = [];
const rand1 = Math.ceil(Math.random() * 151);
const rand2 = Math.ceil(Math.random() * 151);
const rand3 = Math.ceil(Math.random() * 151);
//DO NOT TOUCH CODE ABOVE

//Below is a function containing asynchronous, promise-based axios requests that are requesting three random pokemon and adding them to our pokemonArray variable.
// function getPokemon() {
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
//     .then(res => pokemonArray.push(res.data))
//     .catch(err => console.log(err));
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
//     .then(res => pokemonArray.push(res.data))
//     .catch(err => console.log(err));
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
//     .then(res => pokemonArray.push(res.data))
//     .catch(err => console.log(err));
//     // setTimeout(() => console.log(pokemonArray.length), 4000) 
//   }

// STEP 1:
// Without accounting for error handling, convert the above .then()s into async/await syntax below
// async function getPokemon(){
//   let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
//   let b = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
//   let c = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
//   pokemonArray.push(a.data, b.data, c.data)
//   console.log(pokemonArray.length)
// }
// STEP 2:
// Now use a try/catch block to account for error handling for the code above.
// Then, implement the following console.log( ) in a finally block to check your pokemonArray length: 
// console.log(`we have ${pokemonArray.length} Pokemon in our pokemonArray`)
async function getPokemon(){
  try{
    let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
    let b = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
    let c = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
  pokemonArray.push(a.data, b.data, c.data)
  }catch(err){
    console.log(err)
  }finally{
    console.log(pokemonArray.length)
  }
}


//DO NOT TOUCH THE CODE BELOW:
getPokemon();






// async function getPokemon(){
//   let a = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
//   pokemonArray.push(a.data)
//   let b = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
//   pokemonArray.push(b.data)
//   let c = axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
//   pokemonArray.push(c.data)
//   console.log(pokemonArray.length)
//  }


// async function getPokemon(){
//   try {

//   } catch(err){
//     console.log(err)
//   }finally{
//     console.log(pokemonArray.length)
//   }
// }