var LOCATION_INTELLIGENCE_SERVER_URL = "https://api.pitneybowes.com/location-intelligence/geolife/v1/demographics/";

var responseType = 'JSON';
var filter = 'GenderTheme,AgeTheme,EthnicityTheme,MaritalStatusTheme,IncomeTheme,CommuterPatternsTheme,AutomobileTheme,EducationalAttainmentTheme';
var url = "https://api.pitneybowes.com/oauth/token";

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Authorization", "Basic UkMydkxoSzdFOXpCN0pvbnQ5WEl0QVp4bUxiV2lHTTU6NXJqbXNGZ0ZZVDhheTM1TQ==");
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send('grant_type=client_credentials');


function handleLatAndLong(latitude, longitude) {
    var responseText = xhr.responseText;
    var token = JSON.parse(responseText).access_token;

    callGeoLifeByLocation(latitude, longitude, token);
}

function callGeoLifeByLocation(x, y, token) {
    var GLife = new GEOAPIS_V1.geoLife(token);
    //enter the returned access token as explained in Obtaining Credentials section
    GLife.getDemographicByLocation({latitude: x, longitude: y}, 'geoApisCallback');
}

json = 0;

function geoApisCallback(data) {
    if (data !== undefined) {
<<<<<<< HEAD
        var blah = data;
        $('#ResponseDiv').html(blah);
        console.log(blah);

        json = data;
        console.log(json.response.themes.ageTheme);

    }
=======
        $('#ResponseDiv').html(JSON.stringify(data));
    }	

>>>>>>> c5b12293055f81f0ba752272c1b15481558863d4
}

/**
 * Returns GeoLife Variables by location in XML or JSON formats
 * @param responseType
 * @param latitude
 * @param longitude
 * @param filter
 * @param profile
 */
/*function getGeoLifeByLocation(responseType, latitude, longitude, filter){
 var xhr = new XMLHttpRequest();
 var apiUrl = 'bylocation?latitude=' + latitude + '&longitude=' + longitude;
 if (filter!= null && filter != ''){
 apiUrl += '&filter=' + filter;
 }

 xhr.open('GET', LOCATION_INTELLIGENCE_SERVER_URL + apiUrl);
 if (responseType=='XML'){
 xhr.setRequestHeader('Content-type', 'application/xml');
 xhr.setRequestHeader('Accept', 'application/xml');
 }
 else if (responseType=='JSON'){
 xhr.setRequestHeader('Authorization', 'Basic UkMydkxoSzdFOXpCN0pvbnQ5WEl0QVp4bUxiV2lHTTU6NXJqbXNGZ0ZZVDhheTM1TQ==')
 xhr.setRequestHeader('Content-type', 'application/json');
 xhr.setRequestHeader('Accept', 'application/json');
 }
 console.log(xhr);
 xhr.send(null);
 return true;
 }*/
<<<<<<< HEAD
 

$('#prefs').submit(function (e) {
    e.preventDefault();
});

function showList() {
    var gender = $('input[name=gender]:checked').val();
    var age = $('input[name=age]').val();
    var ethnic = $('input[name=ethnic]').val();
    var marital = $('input[name=marital]:checked').val();
    var income = $('input[name=income]').val();
    var household = $('input[name=household]').val();
    var automobile = $('input[name=automobile]:checked').val();
    var college = $('input[name=college]:checked').val();

    var genderObject = json.response.themes.genderTheme.individualValueVariable;
    var malePopulationCount = genderObject[0].value;
    var femalePopulationCount = genderObject[1].value;


=======
$('#prefs').submit(function (e) {
    e.preventDefault();
});
function showDiv() {
	document.getElementById("final-list").style.display = "block";
}

function updateList() {
	var item = document.getElementsByClassName("poi-item");
	item.value = "New York";
}
function showList(){
    console.log("success");
>>>>>>> c5b12293055f81f0ba752272c1b15481558863d4
}