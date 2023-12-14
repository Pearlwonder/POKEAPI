import axios from "axios"; 

export default async function pokeApi() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
  return response; 

}

// response.map((x) => {

// })


// Take response array and FILTER THRU THE ARRAY in order to organize each type of pokemon 

// Map thru array and get the URL.. Make an API call to all URL gives an array of promises. 

// it won't work how u expect it to work .. just make sure to capture result. .promiseAll(); 

