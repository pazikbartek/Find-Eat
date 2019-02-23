import Fetch from "./fetch.js";
import Search from "./search.js";

window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = "none";
    console.log('loaded');
    
});

let search = new Search();
let fetch = new Fetch();

document.querySelector('#button').addEventListener('click', function(){
    fetch.getCityID(search.getData()[0])
    .then(res => fetch.getRestaurantsByCityID(search.getData()[1], search.getData()[2]))
    .catch(err => console.log(err));
    })

