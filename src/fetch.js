class Fetch{
  constructor(){
    this.cityID;
    console.log('nowy fetch z constructora')
  }

  getCityID(){
    return new Promise((resolve, rejected) =>{ // calosc musi byc obietnica i dopiero gdy wykona sie podstawienie to bedzie resolve()
      fetch("https://developers.zomato.com/api/v2.1/cities?q=warsaw", {
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

  getRestaurantsByCityID(){
    let name;
    let photo;
    let klasa;
    let price;
    let opinion;
    let votes;

    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&sort=cost&order=asc`, {
      headers: {
        Accept: "application/json",
        "User-Key": "9bf30724352ee07c0f9fb3c65579d759"
      }
    })
    .then(resp => resp.json())
    .then((resp) => {
      console.log(resp.restaurants);
      resp.restaurants.forEach(restaurant => {
        klasa = document.createElement('div');
        klasa.className = "restaurant";
        name = restaurant.restaurant.name;
        photo = restaurant.restaurant.featured_image;
        opinion = restaurant.restaurant.user_rating.aggregate_rating;
        price = restaurant.restaurant.average_cost_for_two;
        votes = restaurant.restaurant.user_rating.votes;

        klasa.innerHTML = name + "<br/>" + price + " " + opinion + " " + votes;
        console.log(klasa);

      })
    });

  }
  // getCityID().then(getRestaurantsByCityID);
}

export default Fetch;