/* fetch("https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=28&APIkey=19f0c81f8b64991ae9a72bcd9b2b83710b7564c139eaea6f8e08958fd6114099",{
	"method":"GET",
	"headers":{
	}
}) */

var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=28&APIkey=19f0c81f8b64991ae9a72bcd9b2b83710b7564c139eaea6f8e08958fd6114099';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var datos = request.response;
  populateHeader(datos);
  showHeroes(datos);
}

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  //myH1.textContent = jsonObj['squadName'];
  //header.appendChild(myH1);

  var myPara = document.createElement('p');
  //myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  //header.appendChild(myPara);

}

function showHeroes(jsonObj) {
  var jugadores = jsonObj['result'];

  for(var i = 0; i < jugadores.length; i++) {
	var myArticle = document.createElement('article');
	var myH2 = document.createElement('h2');
	var myPara1 = document.createElement('p');
	var myPara2 = document.createElement('p');
	var myPara3 = document.createElement('p')
	var myPara4 = document.createElement('p')

	myH2.textContent = jugadores[i].name;
	myPara1.textContent = 'Jugador: ' + jugadores[i].player_name;
	myPara2.textContent = 'País: ' + jugadores[i].team_name;
	myPara3.textContent = 'Goles:'+ jugadores[i].goals;
	myPara4.textContent = 'Goles de penal:'+ jugadores[i].penalty_goals;

	/*
	var superPowers = jugadores[i].powers;
	for(var j = 0; j < superPowers.length; j++) {
	  var listItem = document.createElement('li');
	  listItem.textContent = superPowers[j];
	  myList.appendChild(listItem);
	}
*/
	myArticle.appendChild(myH2);
	myArticle.appendChild(myPara1);
	myArticle.appendChild(myPara2);
	myArticle.appendChild(myPara3);
	myArticle.appendChild(myPara4);
  }
}
