var request = require('request');
var Spotify = require('node-spotify-api');
require("dotenv").config()

var input = process.argv.splice(2).join(" ");

    
            
function omdbThis(value){
    var queryUrl = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=" + process.env.OMDB_API;
    
    request(queryUrl, function(error, response, body){
        if(error){
            return error;
        }
        var data = JSON.parse(body)
        console.log(data.Title)
        console.log(data.Year)
        console.log(data.Rated)
    })
}

omdbThis(input);

console.log(process.env)