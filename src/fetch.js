class Fetch{
  constructor(){
    this.cityID;
    console.log('nowy fetch z constructora')
  }

  getCityID(city){
    return new Promise((resolve, rejected) =>{ // calosc musi byc obietnica i dopiero gdy wykona sie podstawienie to bedzie resolve()
      fetch(`https://developers.zomato.com/api/v2.1/cities?q=${city}`, {
        headers: {
          Accept: "application/json",
          "User-Key": "9bf30724352ee07c0f9fb3c65579d759"
        }
      })
      .then(resp => resp.json())
      .then((resp) => {
          this.cityID = resp.location_suggestions[0].id;
          resolve();
      })

    })

  }

  getRestaurantsByCityID(sort, order){

    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${this.cityID}&entity_type=city&sort=${sort}&order=${order}`, {
      headers: {
        Accept: "application/json",
        "User-Key": "9bf30724352ee07c0f9fb3c65579d759"
      }
    })
    .then(resp => resp.json())
    .then((resp) => {
      console.log(resp.restaurants);
      document.querySelector('#results').innerHTML="";
      resp.restaurants.forEach(restaurant => {
        let data = document.createElement('div');
        data.className = "data";
        let box = document.createElement('div');
        box.className = "box";
        let phot = document.createElement('div');
        phot.className = "photo";
        let a = document.createElement('a');

        let color;
        let name = restaurant.restaurant.name;
        let photo = restaurant.restaurant.thumb;
        let opinion = restaurant.restaurant.user_rating.aggregate_rating;
        let price = restaurant.restaurant.average_cost_for_two;
        let votes = restaurant.restaurant.user_rating.votes;
        let currency = restaurant.restaurant.currency;
        let link = restaurant.restaurant.url;
        
        if (opinion<3){
          color="rgb(241, 23, 23)";
        }
        else if(opinion>=3 && opinion <4){
          color="rgb(247, 171, 30)";
        }
        else{
          color="rgb(12, 168, 12)";
        }

        opinion+= "/5"

        if(votes==0){
          opinion="Unknown";
          color="black";
        }

        data.innerHTML = `<span style="font-size:1.8vw; font-weight:600">${name}</span> <br/>  <br/>  Average cost for two: <b>${price}${currency}</b> <br/> Rating: <span style="color:${color}"><b> ${opinion} </b></span>  (${votes})`;
        if(photo){
          phot.style.backgroundImage = `url("${photo}")`;
        }
        else{
          phot.style.backgroundImage = "url('blankk.png')";
        }

        a.href = link;
        a.target= "_blank";
        a.appendChild(phot);
        box.appendChild(a);
        box.appendChild(data);
        document.querySelector('#results').appendChild(box);

      })
    });

  }

}

export default Fetch;