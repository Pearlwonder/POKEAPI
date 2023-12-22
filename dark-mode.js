import axios from "axios"; 

const toggle = document.getElementById('tDark')
const body = document.querySelector('body')

export default async function dark() {
    toggle.addEventListener("click", function(){
        this.classList.toggle('bi-brightness-high-fill')
        if(this.classList.toggle('bi-moon')){
            body.style.background = "#edf2fc"
            body.style.color = "black"
            body.style.transition = '2s';
        } else {
            body.style.background = "#212121";
            body.style.color = "yellow"
            body.style.transition = '2s';
        }
    })
}
