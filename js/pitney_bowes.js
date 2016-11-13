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

        json = data;

        $('#ResponseDiv').html(json);
        console.log(json);

        console.log(json.response.themes.ageTheme);

    }

       // $('#ResponseDiv').html(JSON.stringify(data));
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


$('#prefs').submit(function (e) {
    e.preventDefault();
});

function showList() {
    var gender = $('input[name=gender]:checked').val();
    var age = $('input[name=age]').val();
    var ethnic = $('input[name=ethnic]').val();
    var marital = $('input[name=marital]:checked').val();
    var income = $('input[name=income]').val();
    var commute = $('input[name=commute]').val();
    var automobile = $('input[name=automobile]:checked').val();
    var college = $('input[name=college]:checked').val();

    var categories = [];

    if(gender=="Male"){
    	categories.push("adventure");
    }
    else {
    	categories.push("shopping");
    }

    if (age>21 && age<35){
    	categories.push("nightlife");

    }
    else if(age>35 && age<60){
    	categories.push("outdoors");

    }
    else if (age>60) {
    	categories.push("museums");

    }
    if(ethnic>=2) {
    	categories.push("cultural");
    }
    if(marital=="Yes"){
    	categories.push("food_drink");
    }
    if(income>120000){
    	categories.push("sightseeing_tours")
    }
    if(commute>30){
    	categories.push("landmarks");
    }
    if(automobile=="Yes"){
    	categories.push("outdoors");
    }
    if(college=="Yes"){
    	categories.push("performances");
    }



    var genderObject = json.response.themes.genderTheme.individualValueVariable;
    var malePopulationCount = genderObject[0].value;
    var femalePopulationCount = genderObject[1].value;
    if(femalePopulationCount>malePopulationCount){
    	categories.push("shopping");
    }



    var ageObject = json.response.themes.ageTheme.individualValueVariable;
    var medAge = ageObject[0].value;
    if(medAge>42){
    	categories.push("museums")
    }
    else{
    	categories.push("nightlife")
    }

    var ethnicObject = json.response.themes.ethnicityTheme.individualValueVariable;
    var percentPop = ethnicObject[0].value;
    if(percentPop>3){
    	categories.push("cultural");
    }

    var maritalObject = json.response.themes.maritalStatusTheme.rangeVariable;
    var married = maritalObject[0].field[1].value;
    if(married>34){
    	categories.push("wellness_spas");
    }

    var incomeObject = json.response.themes.incomeTheme.individualValueVariable;
    var income = incomeObject[1].value;
    if(income>55000){
    	categories.push("activites");
    }

    var commuteObject = json.response.themes.commuterPatternsTheme.individualValueVariable;
    var commute = commuteObject[1].value;
    if(commute>28){
    	categories.push("zoos_aquariums");
    }

    var automobileObject = json.response.themes.automobileTheme.individualValueVariable;
    var car = automobileObject[1].value;
    if(car>3300000){
    	categories.push("clubs");
    }

    var collegeObject = json.response.themes.educationalAttainmentTheme.rangeVariable;
    var education = collegeObject[0].field[11].value;
    if(education>65){
    	categories.push("amusement");
    }

console.log(categories);
console.log("it works fam");
return categories;
}

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
