import './style.css'
import axios from 'axios';
import pokeApi from './api-call';
import dark from './dark-mode';


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



// Locks in each skill and puts it into a variable. 
// const grassSkill = allDataSkills.filter((x) => x === "grass")
// const fireSkill = allDataSkills.filter((x) => x === "fire");
// const poisonSkill = allDataSkills.filter((x) => x === "poison");
// const WaterSkill = allDataSkills.filter((x) => x === "water");
// const flyingSkill = allDataSkills.filter((x) => x === "flying");
// const bugSkill = allDataSkills.filter((x) => x === "bug");

const bigPokeData = newImgData.map((x) => x.data)

bigPokeData.sort((a,b) => a.id - b.id)
console.log(bigPokeData);


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
const poison = bigPokeData.filter((x) => {
  if(x.types.length > 1) {
    return x.types[1].type.name === "poison"
  }
})

//Take that array and use it as a parameter that displays that array. 

function displayPoke(filterPokeArr) {
  const div = document.getElementById('Poke')
  div.innerHTML = ""
  filterPokeArr.map((x) => {
    const div2 = document.createElement('div');
    const p = document.createElement('p');
    // If statement checking the type .. will change color of P element. 
    
    switch(filterPokeArr) {
      case grass:
        p.innerText = p.style.color='#008080';
        div2.style.border="1px dotted #008080"
        document.body.append(p);
        break; 
      case fire: 
        p.innerText = p.style.color='#DC143C';
        div2.style.border="1px dotted #DC143C"
        document.body.append(p);
         break;
      case water:
        p.innerText = p.style.color='#1E90FF';
        div2.style.border="1px dotted #1E90FF"
        document.body.append(p);
         break;
      case flying:
       p.innerText = p.style.color='#FF8C00';
       div2.style.border="1px dotted #FF8C00"
       document.body.append(p);
        break;
      case poison:
        p.innerText = p.style.color='#8B008B';
        div2.style.border="1px dotted #8B008B"
        document.body.append(p);
        break;  
      case bug:
        p.innerText = p.style.color='#9ACD32';
        div2.style.border="1px dotted #9ACD32"
        document.body.append(p);          
         break;
       case normal:
        p.innerText = p.style.color='#66cDAA';
        div2.style.border="1px dotted #66cDAA"
        document.body.append(p);
        break;
       case electric:
        p.innerText = p.style.color='#FFD700';
        div2.style.border="1px dotted #FFD700"
        document.body.append(p);
        break;
       case fairy:
        p.innerText = p.style.color='#FF1493';
        div2.style.border="1px dotted #FF1493"
        document.body.append(p);
        break;   
       case ground:
         p.innerText = p.style.color='#CD853F';
         div2.style.border="1px dotted #CD853F"
         document.body.append(p);
         break;
       case all:
         p.innerText = p.style.color="#00FF7F";
         div2.style.border="1px dotted #1E90FF"
         document.body.append(p);
         break;
      default:
        p.innerText = p.style.color="black";
        document.body.append(p);
        break;
    }

  
    p.innerText = x.name;
    const urls = document.createElement('img');
    div2.className = "poke-imgs";
    urls.src = x.sprites.front_default;
    div2.append(p, urls);
    div.append(div2);

  }) 
}



// On Click Event Listener 

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

document.getElementById('poison').addEventListener("click", function() {
  displayPoke(poison); 
})

dark()




console.log(bigPokeData);
console.log(grass);
console.log(fire);
console.log(water);
console.log(bug); 
console.log(flying);
console.log(allSkills);
console.log(allGrassFlavors);
console.log(newImgData);



