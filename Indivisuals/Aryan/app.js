const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = 'HGgzNs8K2j8VrmMgNshhbbf4w1QYkKTUng0oBA5v';

const axios = require('axios');

var fs = require('fs');

const ejs = require('ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.get("/", async(req, res)=> {
    res.render('index');
})

app.post('/DOB', async(req, res) => {
    try{
        let startDate = req.body.Start_DOB;

        let urlDOB = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${startDate}`;

        const response1 = await axios.get(urlDOB);

        const data = {
            data1: response1,
        };

        console.log(response1.data[0].hdurl);

    } catch(error) {
        console.log(error);
    }
})

app.get('/Astroid', async(req,res) => {
    res.render('Astroid');
})


app.post('/Astroid', async(req, res) => {
const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2026-03-15&end_date=2026-03-20&api_key=HGgzNs8K2j8VrmMgNshhbbf4w1QYkKTUng0oBA5v';

axios.get(url)
  .then(response => {
    const { near_earth_objects } = response.data;

    console.log(near_earth_objects);

    // console.log(response.data)


    // Loop through each date in the range
    for (let date in near_earth_objects) {
      const asteroids = near_earth_objects[date];

      // Loop through the asteroids for the current date
      for (let asteroid of asteroids) {
        const { name,close_approach_data } = asteroid;

        const miss_distance =
        asteroid.close_approach_data[0].miss_distance.kilometers;

        // console.log(`Asteroid ${name} on ${date} and the closest approach will be: ${miss_distance}`);
      }
    }
  })
  .catch(error => console.log(error));


})

app.listen(3000, function() {
    console.log("Server Started on http://localhost:3000/")
  })





