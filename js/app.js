/*jshint esversion: 6*/


console.log("sanity check");


//PERSON 4

var person4Name = document.getElementById("person4Name");
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", getPerson4);
oReq.open('GET', "http://www.swapi.co/api/people/4");
oReq.send();

function getPerson4 () {
  var content = JSON.parse(this.responseText);
  person4Name.innerHTML = content.name;

}

//PERSON 14

var person14Name = document.getElementById("person14Name");
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", getPerson14);
oReq.open('GET', "http://swapi.co/api/people/14/");
oReq.send();


function getPerson14 () {
  var content = JSON.parse(this.responseText);
  person14Name.innerHTML = content.name;

}


//PERSON 4 HOMEWORLD

var person4HW = document.getElementById("person4HomeWorld");
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", getPerson4HW);
oReq.open('GET', "http://swapi.co/api/planets/1/");
oReq.send();


function getPerson4HW () {
  var content = JSON.parse(this.responseText);
  person4HW.innerHTML = content.name;

}

//PERSON 14 SPECIES

var person14Species = document.getElementById("person14Species");
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", getPerson14Species);
oReq.open('GET', "http://swapi.co/api/species/1/");
oReq.send();


function getPerson14Species () {
  var content = JSON.parse(this.responseText);
  person14Species.innerHTML = content.name;

}





// LIST OF ALL FILMS

//var filmList = document.getElementById("filmList");
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", getFilms);
oReq.open('GET', "http://swapi.co/api/films/");
oReq.send();
var filmList = document.getElementById("filmList");

function getFilms () {
  var content = JSON.parse(this.responseText);
  for (let i=0, len = content.results.length; i< len; i++){
    var eachFilm = document.createElement('li');
    var createFilmHeader = document.createElement('h2');
    createFilmHeader.innerHTML = content.results[i].title;
    eachFilm.appendChild(createFilmHeader);
    filmList.appendChild(eachFilm);
  }
}



// LIST OF ALL FILM PLANETS




