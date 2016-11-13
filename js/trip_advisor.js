var url = "http://api.tripadvisor.com/api/partner/2.0/map//attractions?key=3762e2cd-0868-4cbe-b702-32d2dffcd449";

var x;
var y;
var pos;
var realurl;
 
function GetLatandLong(latitude, longitude) {
	pos = url.lastIndexOf("map/");
	pos+=4;
	realurl = url.slice(0,pos)+latitude+","+longitude+url.slice(pos);
	
	//xhr.open("POST",realurl, true);
	console.log(latitude);
	console.log(longitude);
	console.log(pos);
	console.log(realurl);
	//console.log(realurl.getJSON)
	//console.log(xhr);

    var ul = $('#final-list');
	$.getJSON(realurl, function(data){
		console.log(data);

		for(var i = 0; i < data.data.length; i++){
            var li = document.createElement('li');
            var ith = data.data[i];

            li.appendChild(document.createTextNode(data.data[i].name + "(" + ith.subcategory[0].name + ") located at "
                + ith.address_obj.address_string));
            li.className += " poi-item";
            ul.append(li);
        }
	});

    showDiv();
}

function showDiv() {
    document.getElementById("tit").style.display = "block"
    document.getElementById("final-list").style.display = "block";

}


function findAttractions(){
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    }







    
   


