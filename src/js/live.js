/* var league = 4265;
var key = ad406f1573545faafc7174ac97278cc7;
*/

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "ad406f1573545faafc7174ac97278cc7");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

