fetch("https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=28&APIkey=19f0c81f8b64991ae9a72bcd9b2b83710b7564c139eaea6f8e08958fd6114099",{
	"method":"GET",
	"headers":{
	}
})

let pokedex = require('response.json');
res.send(pokedex);

if("success" == 1){
	console.log("y")
}else{
	console.log("n")
}