var request = require('request');
require("dotenv").config()
var axios=require("axios");
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify)
var search = process.argv[2];
var input = process.argv.slice(3).join(" ");

if (search === "movie-this") {
  console.log("SEARCHING MOVIE DATABASE")
  omdbThis(input)
} else if (search === "concert-this") {
  console.log("SEARCHING BAND DATABASE")
  concertThis(input)
} else if (search === "spotify-this"){
  console.log("SEARCHING SPOTIFY")
  spotifyThis(input)
}

        
            
function omdbThis(){
    var movie = input
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + process.env.OMDB_API;
    

   axios.get(queryUrl).then( function(response){
        console.log("TITLE: " + response.data.Title);  
        console.log("ACTORS: " + response.data.Actors);
        console.log("RELEASE YEAR: " + response.data.Year);
        console.log("LANG: " + response.data.Language)
        console.log("COUNTRY: " + response.data.Country);
        console.log("ROTTEN TOMATOES: " + response.data.Ratings[1].Value);
        console.log("IMBD RATING: " + response.data.imdbRating);
        console.log("PLOT: " + response.data.Plot)
    })
}



function concertThis(){
  var bands = process.argv.slice(3).join("+");
 var queryUrl = "https://rest.bandsintown.com/artists/" + bands + "/events?app_id=codingbootcamp";
   

  axios.get(queryUrl).then(function(response){

    for(let i = 0; i < response.data.length; i++){
      var venName = response.data[i].venue.name;
      var venCity = response.data[i].venue.city;
      var venDate = response.data[i].datetime;

    console.log("Venue Name: " + venName);
    console.log("Venue Location: " + venCity);
    console.log("Date of Event: " + venDate);
    }
  })
} 


function spotifyThis() {
  var song = input
  
 spotify.search({ type: "track", query: song })
  .then(function (response) {
      console.log(response.tracks.items)
      console.log(response.tracks.preview_url);
      console.log(response.data.album.name);
    })
}