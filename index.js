const swapi = require('swapi-node');


swapi.get('https://swapi.dev/api/planets/2').then((result) => {
    console.log("planets details",result);
}).catch((err) => {
    console.log(err);
});

swapi.get('https://swapi.dev/api/vehicles/4').then((result) => {
    console.log("vehicle details",result);

}).catch((err) => {
    console.log(err);
});

swapi.get('https://swapi.dev/api/species/3').then((result) => {
    console.log("species details",result);
}).catch((err) => {
    console.log(err);
});

swapi.get('http https://swapi.dev/api/planets/2').then((result) => {
    console.log("planets  details",result);
}).catch((err) => {
    console.log(err);
});

swapi.get('https://swapi.dev/api/people/2').then((result) => {
    console.log("people detail",result);
}).catch((err) => {
    console.log(err);
});

swapi.get('https://swapi.dev/api/people/?page=1').then((result) => {
    console.log("people",result);
}).catch((err) => {
    console.log(err);
});

swapi.get('https://swapi.dev/api/films/1').then((result) => {
    console.log("film",result);
}).catch((err) => {
    console.log(err);
});


swapi.get('https://swapi.dev/api/starships/9').then((result) => {
    console.log("starship details",result);
}).catch((err) => {
    console.log(err);
});