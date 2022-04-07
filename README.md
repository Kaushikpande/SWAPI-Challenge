# SWAPI-Challenge

# SWAPI API
**A Node.js helper library for http://swapi.dev/ - the Star Wars API**

## Installation
npm install swapi-node

## Usage
const swapi = require('swapi-node');

swapi.get('https://swapi.dev/api/people/?page=2').then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

## This is the response
{
        "count": 82,
        "next": "https://swapi.dev/api/people/?page=3",
        "previous": "https://swapi.dev/api/people/?page=1",
        "results": [
            {
                "name": "Anakin Skywalker",
                "height": "188",
                "mass": "84",
                "hair_color": "blond",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "41.9BBY",
                "gender": "male",
                "homeworld": "https://swapi.dev/api/planets/1/",
                "films": [
                    "https://swapi.dev/api/films/4/",
                    "https://swapi.dev/api/films/5/",
                    "https://swapi.dev/api/films/6/"
                ],
                "species": [],
                "vehicles": [
                    "https://swapi.dev/api/vehicles/44/",
                    "https://swapi.dev/api/vehicles/46/"
                ],
                "starships": [
                    "https://swapi.dev/api/starships/39/",
                    "https://swapi.dev/api/starships/59/",
                    "https://swapi.dev/api/starships/65/"
                ],
                "created": "2014-12-10T16:20:44.310000Z",
                "edited": "2014-12-20T21:17:50.327000Z",
                "url": "https://swapi.dev/api/people/11/"
            },
            {
                "name": "Wilhuff Tarkin",
                "height": "180",
                "mass": "unknown",
                "hair_color": "auburn, grey",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "64BBY",
                "gender": "male",
                "homeworld": "https://swapi.dev/api/planets/21/",
                "films": [
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/6/"
                ],
                "species": [],
                "vehicles": [],
                "starships": [],
                "created": "2014-12-10T16:26:56.138000Z",
                "edited": "2014-12-20T21:17:50.330000Z",
                "url": "https://swapi.dev/api/people/12/"
            }


# To run my project 

## In terminal 

npm i

after that

node index.js
