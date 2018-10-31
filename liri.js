require("dotenv").config();
var request = require("request");
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
var fs = require("fs");

var iHatehomework = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
// var Spotify = require('node-spotify-api');

var Call = function () {
  
  this.concert_this = function () {
    var queryURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
    request(queryURL, function (error, response, body) {
      
      if (!error && response.statusCode === 200) {
        
        var jsonData = JSON.parse(body);
        console.log("Events for: " + term + "\n\n");
        for(var i = 0; i<5; i++){
          console.log("Venue: " + jsonData[i].venue.name);
          console.log("Location: " + jsonData[i].venue.region + ", " + jsonData[i].venue.city);
          console.log("Date: " + jsonData[i].datetime);
          console.log("--------------------------")
       }
      }
    });
    
  };
  this.spotify_this_song = function () {
    fs.readFile("random.txt0", "utf8", function(error, data){
      if (error) {
        return console.log(error);
      }
    
      // We will then print the contents of data
      console.log(data);
    
      // Then split it by commas (to make it more readable)
      data.split(",").push(term);
    
      // We will then re-display the content as an array for later use.
      console.log(dataArr);
    
    });
    spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      
      console.log(data);
    });
    
  };
  this.movie_this = function () {
    var queryUrl = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
    
    // console.log(queryUrl);
    
    request(queryUrl, function (error, response, body) {
      
      if (!error && response.statusCode === 200) {
        
        console.log("Movie Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDb Rating: " + JSON.parse(body).Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Cast: " + JSON.parse(body).Actors);

        
      }
    });
    
  };
  this.do_what_it_says = function () {
    
  };
}
if (!search) {
  console.log('please input a search type and term /n-------------------/n')
  return;
  
}
var call = new Call();

switch (search) {
  case "concert-this":
  call.concert_this(term);
  break;
  
  case "spotify-this-song":
  call.spotify_this_song(term);
  break;
  
  case "movie-this":
  call.movie_this(term);
  break;
  
  case "do-what-it-says":
  call.do_what_it_says(term);
  break;
  default:
  break;
};