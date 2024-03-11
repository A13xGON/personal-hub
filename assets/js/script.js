var dateEl = document.querySelector('.date');
var sportsEl = document.querySelector('.sports');

var dateFormats = ["dddd, MMM D, YYYY", "MMM D, YYYY", "MMMM D, YYYY h:mm A", "ddd, MMM D, YYYY h:mm A" ];
var sportsTeams = ["Spurs", "Mavericks"];

var currentDateFormatIndex = 0;

sportsAPI_key = "b5074573df57c56932b0b3096843718d";

console.log("SCRIPT LOADING");

const nextDateFormat = function() {
    console.log("DATE CLICKED");
    currentDateFormatIndex++;
    if (currentDateFormatIndex < dateFormats.length) {
        dateEl.innerHTML = dayjs().format(dateFormats[currentDateFormatIndex]);
    } else {
        currentDateFormatIndex = 0;
        dateEl.innerHTML = dayjs().format(dateFormats[currentDateFormatIndex]);
    }
}

<<<<<<< Updated upstream
/* const buildSports = async function (teams) {
=======
// const buildSports = async function (teams) {
>>>>>>> Stashed changes

    let sportsAPI_URL ="https://v2.nba.api-sports.io/standings?league=standard&season=2023&team=31";
    let teamLogoURL = "";
    let winTotal = 0;
    let lossTotal = 0;

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", sportsAPI_key);
    myHeaders.append("x-rapidapi-host", "v2.nba.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    response = await fetch(sportsAPI_URL, requestOptions)
 
    if (response.ok) {
        data = await response.json()
            console.log(data);

            winTotal = data['response'][0]['win']['total'];
            lossTotal = data['response'][0]['loss']['total'];
            teamLogoURL = data['response'][0]['team']['logo'];

            console.log( winTotal, lossTotal, teamLogoURL);

            console.log(winTotal);
        } else {
        alert('Error: ' + response.statusText);
    }

    console.log("here");
    let sportsContainerEl = document.createElement("div");
    sportsContainerEl.setAttribute("class", "flex");

    let teamIconEl = document.createElement("img");
    
    teamIconEl.setAttribute("src", teamLogoURL);
    teamIconEl.setAttribute("class", "teamIcon flex-row w-1/5 p-3" );
    
    let winsLossesEl = document.createElement("div");
    winsLossesEl.setAttribute("class", "flex items-center");
    winsLossesEl.innerHTML = "WINS: " + winTotal + "  / LOSSES: " + lossTotal;

    sportsContainerEl.appendChild(teamIconEl);
    sportsContainerEl.appendChild(winsLossesEl);

    sportsEl.appendChild(sportsContainerEl);

} 
*/

currentDate = dayjs().format(dateFormats[currentDateFormatIndex]);
dateEl.innerHTML = dayjs().format(dateFormats[currentDateFormatIndex]);

buildSports(sportsTeams);

console.log("HERE DATE:" + currentDate);


dateEl.addEventListener('click', nextDateFormat);