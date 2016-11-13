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
        $('#ResponseDiv').html(data);

        json = data;
        json = {
            "data": [
                {
                    "see_all_photos": "http://www.tripadvisor.com/LocationPhotos-g60745-d3546275-mMCID-Diablo_Glass_School-Boston_Massachusetts.html",
                    "attraction_types": [
                        {
                            "localized_name": "Classes/Workshops",
                            "name": "classes/workshops"
                        }
                    ],
                    "web_url": "http://www.tripadvisor.com/Attraction_Review-g60745-d3546275-Reviews-mMCID-Diablo_Glass_School-Boston_Massachusetts.html",
                    "percent_recommended": null,
                    "location_string": "Boston, Massachusetts",
                    "location_id": "3546275",
                    "write_review": "http://www.tripadvisor.com/UserReview-g60745-d3546275-mMCID-Diablo_Glass_School-Boston_Massachusetts.html",
                    "api_detail_url": "http://api.tripadvisor.com/api/partner/2.0/location/3546275?key=<YOUR KEY HERE>",
                    "address_obj": {
                        "street1": "123 Terrace Street",
                        "street2": null,
                        "city": "Boston",
                        "state": "Massachusetts",
                        "country": "United States",
                        "postalcode": "02120",
                        "address_string": "123 Terrace Street, Boston, MA 02120"
                    },
                    "wikipedia_info": null,
                    "distance": ".25",
                    "category": {
                        "name": "attraction",
                        "localized_name": "Attraction"
                    },
                    "awards": [],
                    "subcategory": [
                        {
                            "name": "activities",
                            "localized_name": "Activities"
                        },
                        {
                            "name": "classes",
                            "localized_name": "Classes"
                        }
                    ],
                    "num_reviews": "1",
                    "rating_image_url": "http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/5.0-MCID-5.png",
                    "name": "Diablo Glass School",
                    "ancestors": [
                        {
                            "abbrv": null,
                            "level": "City",
                            "name": "Boston",
                            "location_id": "60745"
                        },
                        {
                            "abbrv": "MA",
                            "level": "State",
                            "name": "Massachusetts",
                            "location_id": "28942"
                        },
                        {
                            "abbrv": null,
                            "level": "Country",
                            "name": "United States",
                            "location_id": "191"
                        }
                    ],
                    "bearing": "south",
                    "longitude": "-71.09837",
                    "rating": "5.0",
                    "latitude": "42.32788",
                    "ranking_data": {
                        "geo_location_id": "60745",
                        "ranking_string": "#95 of 139 activities in Boston",
                        "geo_location_name": "Boston",
                        "ranking_out_of": "139",
                        "ranking": "95"
                    }
                },
                {
                    "see_all_photos": "http://www.tripadvisor.com/LocationPhotos-g60745-d5831233-mMCID-The_Squealing_Pig_Boston-Boston_Massachusetts.html",
                    "attraction_types": null,
                    "web_url": "http://www.tripadvisor.com/Attraction_Review-g60745-d5831233-Reviews-mMCID-The_Squealing_Pig_Boston-Boston_Massachusetts.html",
                    "percent_recommended": null,
                    "location_string": "Boston, Massachusetts",
                    "location_id": "5831233",
                    "write_review": "http://www.tripadvisor.com/UserReview-g60745-d5831233-mMCID-The_Squealing_Pig_Boston-Boston_Massachusetts.html",
                    "api_detail_url": "http://api.tripadvisor.com/api/partner/2.0/location/5831233?key=<YOUR KEY HERE>",
                    "address_obj": {
                        "street1": "134 Smith St",
                        "street2": null,
                        "city": "Boston",
                        "state": "Massachusetts",
                        "country": "United States",
                        "postalcode": "02120",
                        "address_string": "134 Smith St, Boston, MA 02120"
                    },
                    "wikipedia_info": null,
                    "distance": ".27",
                    "category": {
                        "name": "attraction",
                        "localized_name": "Attraction"
                    },
                    "awards": [],
                    "subcategory": [
                        {
                            "name": "bars",
                            "localized_name": "Bars"
                        },
                        {
                            "name": "nightlife",
                            "localized_name": "Nightlife"
                        }
                    ],
                    "num_reviews": "1",
                    "rating_image_url": "http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/3.0-MCID-5.png",
                    "name": "The Squealing Pig Boston",
                    "ancestors": [
                        {
                            "abbrv": null,
                            "level": "City",
                            "name": "Boston",
                            "location_id": "60745"
                        },
                        {
                            "abbrv": "MA",
                            "level": "State",
                            "name": "Massachusetts",
                            "location_id": "28942"
                        },
                        {
                            "abbrv": null,
                            "level": "Country",
                            "name": "United States",
                            "location_id": "191"
                        }
                    ],
                    "bearing": "northwest",
                    "longitude": "-71.10205",
                    "rating": "3.0",
                    "latitude": "42.33481",
                    "ranking_data": {
                        "geo_location_id": "60745",
                        "ranking_string": "#71 of 157 nightlife in Boston",
                        "geo_location_name": "Boston",
                        "ranking_out_of": "157",
                        "ranking": "71"
                    }
                },
                {
                    "see_all_photos": "http://www.tripadvisor.com/LocationPhotos-g60745-d5842367-mMCID-Mission_Bar_Grill-Boston_Massachusetts.html",
                    "attraction_types": null,
                    "web_url": "http://www.tripadvisor.com/Attraction_Review-g60745-d5842367-Reviews-mMCID-Mission_Bar_Grill-Boston_Massachusetts.html",
                    "percent_recommended": null,
                    "location_string": "Boston, Massachusetts",
                    "location_id": "5842367",
                    "write_review": "http://www.tripadvisor.com/UserReview-g60745-d5842367-mMCID-Mission_Bar_Grill-Boston_Massachusetts.html",
                    "api_detail_url": "http://api.tripadvisor.com/api/partner/2.0/location/5842367?key=<YOUR KEY HERE>",
                    "address_obj": {
                        "street1": "724 Huntington Ave",
                        "street2": null,
                        "city": "Boston",
                        "state": "Massachusetts",
                        "country": "United States",
                        "postalcode": "02115-6313",
                        "address_string": "724 Huntington Ave, Boston, MA 02115-6313"
                    },
                    "wikipedia_info": null,
                    "distance": ".35",
                    "category": {
                        "name": "attraction",
                        "localized_name": "Attraction"
                    },
                    "awards": [],
                    "subcategory": [
                        {
                            "name": "bars",
                            "localized_name": "Bars"
                        },
                        {
                            "name": "nightlife",
                            "localized_name": "Nightlife"
                        }
                    ],
                    "num_reviews": "0",
                    "rating_image_url": null,
                    "name": "Mission Bar & Grill",
                    "ancestors": [
                        {
                            "abbrv": null,
                            "level": "City",
                            "name": "Boston",
                            "location_id": "60745"
                        },
                        {
                            "abbrv": "MA",
                            "level": "State",
                            "name": "Massachusetts",
                            "location_id": "28942"
                        },
                        {
                            "abbrv": null,
                            "level": "Country",
                            "name": "United States",
                            "location_id": "191"
                        }
                    ],
                    "bearing": "northwest",
                    "longitude": "-71.10514",
                    "rating": null,
                    "latitude": "42.33403",
                    "ranking_data": null
                }
            ],
            "paging": {
                "previous": null,
                "skipped": "0",
                "results": "3",
                "next": "http://api.tripadvisor.com/api/partner/2.0/map/42.33141,-71.099396/attractions?key=<YOUR KEY HERE>&limit=3&offset=3",
                "total_results": "10"
            }
        };

        json.data.forEach(function(obj){
            console.log(obj.subcategory[0].name);
            console.log(obj.subcategory[1].name);
        });
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
}