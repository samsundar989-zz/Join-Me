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
function geoApisCallback(data) {
    if (data !== undefined) {
        $('#ResponseDiv').html(JSON.stringify(data));
    }
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
 

function showList(){
    console.log("success");
}