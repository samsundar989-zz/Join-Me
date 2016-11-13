var url = "http://api.tripadvisor.com/api/partner/2.0/map/51.5014,-0.1419/attractions?key=3762e2cd-0868-4cbe-b702-32d2dffcd449";
var xmlHttp;

 
function getLatandLong(latitude, longitude) {
	console.log(latitude);
	console.log(longitude);
}


function findAttractions()
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    }

    
   


