import axios  from "axios";

export default async function img() {
    const bulb = await axios.get('https://pokeapi.co/api/v2/pokemon/1/')
    return bulb
}