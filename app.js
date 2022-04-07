const express = require('express');
const app = express();
const swapi = require('swapi-node');



app.get('/', function (req, res) {
  return res.json("Hello world!!")
});

app.get('/getpeopledetailsbyIndex', function (req, res) {
    const id = req.query.id;
    swapi.get('https://swapi.dev/api/people/'+id).then((result) => {
    console.log(result);
    return res.json({
        data:result
    });
});
  });

app.get('/getpeoplenextpage', function (req, res) {
    const page = req.query.page;
    swapi.get('https://swapi.dev/api/people/?page='+page).then((result) => {
    console.log(result);
    return res.json({
        data:result
    });
});
  });

  app.get('/getfilmdetailsbyIndex', function (req, res) {
    const id = req.query.id;
    swapi.get('https://swapi.dev/api/films/'+id).then((result) => {
    console.log(result);
    if(!result)
    {
        return res.json("id not found try another")
    }
    return res.json({
        data:result
    });
});
  });

  app.get('/getstarshipsdetailsbyIndex', function (req, res) {
      try {
        const id = req.query.id;
        swapi.get('https://swapi.dev/api/starships/'+id).then((result) => {
        console.log(result);
        if(!result)
        {
            return res.json("id not found try another")
        }
        return res.json({
            data:result
        });
    });
          
      } catch (error) {
        return responseError(req, res, error);
      }
    
  });

  app.get('/getplanetsdetailsbyIndex', function (req, res) {
    const id = req.query.id;
    swapi.get('https://swapi.dev/api/planets/'+id).then((result) => {
    console.log(result);
    if(!result)
    {
        return res.json("id not found try another")
    }
    return res.json({
        data:result
    });
});
  });


  app.get('/getvehiclesdetailsbyIndex', function (req, res) {

    const id = req.query.id;
    swapi.get('https://swapi.dev/api/vehicles/'+id).then((result) => {
    console.log(result);
    if(!result)
    {
        return res.json("id not found try another")
    }
    return res.json({
        data:result
    });
});
  });


  app.get('/getspeciesdetailsbyIndex', function (req, res) {

    const id = req.query.id;
    swapi.get('https://swapi.dev/api/species/'+id).then((result) => {
    console.log(result);
    if(!result)
    {
        return res.json("id not found try another")
    }
    return res.json({
        data:result
    });
});
  });

  
  app.get('/getplanetsdetailsbyIndex', function (req, res) {

    const id = req.query.id;
    swapi.get('http https://swapi.dev/api/planets/'+id).then((result) => {
    console.log(result);
    if(!result)
    {
        return res.json("id not found try another")
    }
    return res.json({
        data:result
    });
});
  });
  
  


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});