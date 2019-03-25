import Fetch from "./fetch.js";
import Search from "./search.js";

window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = "none";
});

let search = new Search();
let fetch = new Fetch();


document.querySelector('#button').addEventListener('click', function(){
    document.querySelector('.searchLoader').style.display = "block";
    fetch.getCityID(search.getData()[0])
    .then(res => fetch.getRestaurantsByCityID(search.getData()[1], search.getData()[2]))
    .catch(err => {
        document.querySelector('.searchLoader').style.display = "none";
    });
    })

