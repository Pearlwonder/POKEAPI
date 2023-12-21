import './style.css'
import axios from 'axios';
import pokeApi from './api-call';
// import { displayImg } from './display-data';


const data = await pokeApi(); 
console.log(data);

//Gives me the Name: and URL: object.
const dataName = await data.data.results
console.log(dataName);

const dataInfo = await dataName[0].name
console.log(dataInfo)



//Allows me to extract the names of the pokemon's.
const div = document.getElementById('names')

 const names =  dataName.forEach(async (x) => {
    const div2 = document.createElement('div')
    const name = document.createElement('p')
    div2.className = 'name-container';
    name.className = "poke-names";
    name.innerText = x.name; 
    div2.append(name);
    div.append(div2);
})

// Why is this UNDEFINED? 
console.log(names);

//Gives me the images of the Pokemon Img's 
 const arrayOfPromises = dataName.map(async (pokeObj) => {
  // Access the URL.
  const fetch = await axios.get(pokeObj.url);
  console.log(fetch)
  // Making API to all URL's in order to get the front img of each pokemon.
  const imgs = fetch.data.sprites.front_default;


  console.log(imgs);
  const div = document.getElementById('Poke')
  const urls = document.createElement('img');
  div.className = 'imgs-container'
  urls.className = "poke-imgs";
  urls.src = imgs;
  div.append(urls);
})


// Buttons Function .Filter 

const arrOfP = dataName.map(async(pokeObj) => {
  const fetch = await axios.get(pokeObj.url)
  return fetch
})

console.log(arrOfP);

const newImgData = await Promise.all(arrOfP);


// Makes all moves into one array removes nested array 
// This method only focuses on the first set of skills and not the nested ones
const allGrassFlavors = newImgData.map((x) => x.data.types[0].type.name).flat();

// combines map and flat in order to receive the desire out come.
// In this situation you get all nested array's as one including nested moves.
const allSkills = newImgData.flatMap(x => x.data.types);
const allNames = newImgData.map((x) => x.data.name) ;

console.log(allNames);
console.log(allSkills)
// This extracts all desired moves into a single array. 
const bigPokeData = newImgData.map((x) => x.data)

console.log(newImgData); 
console.log(bigPokeData);

// Locks in each skill and puts it into a variable. 
// const grassSkill = allDataSkills.filter((x) => x === "grass")
// const fireSkill = allDataSkills.filter((x) => x === "fire");
// const poisonSkill = allDataSkills.filter((x) => x === "poison");
// const WaterSkill = allDataSkills.filter((x) => x === "water");
// const flyingSkill = allDataSkills.filter((x) => x === "flying");
// const bugSkill = allDataSkills.filter((x) => x === "bug");

const all = bigPokeData.filter((x) => x)
const grass = bigPokeData.filter((x) => x.types[0].type.name === "grass");
const fire = bigPokeData.filter((x) => x.types[0].type.name === "fire");
const water = bigPokeData.filter((x) => x.types[0].type.name === "water");
const bug = bigPokeData.filter((x) => x.types[0].type.name === "bug");
const normal = bigPokeData.filter((x) => x.types[0].type.name === "normal");
const electric = bigPokeData.filter((x) => x.types[0].type.name === "electric");
const fairy = bigPokeData.filter((x) => x.types[0].type.name === "fairy");
const ground = bigPokeData.filter((x) => x.types[0].type.name === "ground");
const flying = bigPokeData.filter((x) => {
  if(x.types.length > 1) {
    return x.types[1].type.name === "flying"
  }
})


console.log(flying);;
//Take that array and use it as a parameter that displays that array. 



function displayPoke(filterPokeArr) {
  const div = document.getElementById('Poke')
  div.innerHTML = ""
  filterPokeArr.map((x) => {
    const div2 = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = x.name;
    const urls = document.createElement('img');
    div2.className = "poke-imgs";
    urls.src = x.sprites.front_default;
    div2.append(p, urls);
    div.append(div2);
  }) 
  console.log(filterPokeArr)

  


  // Use the map method to display each Pokemon's data. 
}

displayPoke(grass)

document.getElementById('normal').addEventListener("click", function() {
  displayPoke(normal); 
})

document.getElementById('electric').addEventListener("click", function() {
  displayPoke(electric); 
})


document.getElementById('fairy').addEventListener("click", function() {
  displayPoke(fairy); 
})

document.getElementById('ground').addEventListener("click", function() {
  displayPoke(ground); 
})

document.getElementById('grass').addEventListener("click", function() {
  displayPoke(grass)
})

document.getElementById('water').addEventListener("click", function() {
  displayPoke(water); 
})

document.getElementById('fire').addEventListener("click", function() {
  displayPoke(fire)
})

document.getElementById('flying').addEventListener("click", function() {
  displayPoke(flying); 
})

document.getElementById('bug').addEventListener("click", function() {
  displayPoke(bug); 
})

document.getElementById('show-all').addEventListener("click", function() {
  displayPoke(all); 
})



console.log(bigPokeData);

console.log(grass);
console.log(fire);
console.log(water);
console.log(bug); 
console.log(flying);

console.log(allSkills);

console.log(allGrassFlavors);



console.log(newImgData);

// displayImg(bulbImg);

// const bulb = await img(); 
// console.log(bulb);

// const bulbImg = bulb.data.sprites.front_default;
// console.log(bulbImg);

// const imgs = document.createElement('img');
// imgs.src = bulbImg;
// document.body.append(imgs);



// Instead of name and poke you'll hav 1 div 
// 