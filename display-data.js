/*
export function displayImg(bulbImg) {
    bulbImg.map((x) => {
        const img = document.createElement('img')
        img.src = x;
        img.className = "Bulba"; 
        document.body.append(x); 
      })
}
*/ 
import axios from "axios"


export default function arrayOfPromises(){
  dataName.map(async (pokeObj) => {
   // Access the URL.
   const fetch = await axios.get(pokeObj.url);
   console.log(fetch)
   // Making API to all URL's in order to get the front img of each pokemon.
   const imgs = fetch.data.sprites.front_default;
 
 
   console.log(imgs);
   const div = document.createElement('div')
   const urls = document.createElement('img');
   div.className = 'imgs-container'
   urls.className = "poke-imgs";
   urls.src = imgs;
   div.append(urls);
   document.body.append(div);

  })
}
