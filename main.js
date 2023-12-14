import pokeApi from './api-call';
import img from './url';
// import { displayImg } from './display-data';

const data = await pokeApi(); 
console.log(data);

const dataName = data.data.results; 
console.log(dataName);

dataName.forEach((x) => {
    const name = document.createElement('p')
    name.innerHTML = x.name;
    document.body.append(name);
})

console.log(dataName);

// displayImg(bulbImg);

const bulb = await img(); 
console.log(bulb);

const bulbImg = bulb.data.sprites.front_default;
console.log(bulbImg);

const imgs = document.createElement('img');
imgs.src = bulbImg;
document.body.append(imgs);

