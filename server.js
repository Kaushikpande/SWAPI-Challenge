const express = require('express');
const app = express();
const swapi = require('swapi-node');
const axios = require('axios');
const { response } = require('express');


app.get('/getDetails',async (req, res)=> {
    try {
    const module = req.query.module;
    if(module == null)
    {
        module ="/"
    }
    let url = "https://swapi.dev/api/"+module
    let result = await axios.get(url);
    console.log(result)
    return res.json({
        data:result.data
    });
            
    } catch (error) {
        return responseError(req, res, error);
    }
    
  });



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});