

var request = require('request');
require("dotenv").config()

var input = process.argv.splice(2).join(" ");

// var spotify = new Spotify({
//     id: <your spotify client id>,
//   secret: <your spotify client secret>
// });
            
            
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