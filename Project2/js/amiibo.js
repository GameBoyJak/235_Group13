"use strict";
	window.onload = init;
	
	function init(){
		document.querySelector("#status").innerHTML = "Ready to search!"
		document.querySelector("#search").onclick = getData;
	}
	
	let displayTerm = "";
	let limit = 0;
	let query = "";

	function getData(){
		// 1 - main entry point to web service
		const SERVICE_URL = "https://www.amiiboapi.com/api/amiibo/";
		
		// No API Key required!
		
		// 2 - build up our URL string
		// not necessary for this service endpoint
		let url = SERVICE_URL;
		
		query = document.querySelector("#query").value;
		url += `?${query}=`
		// 3 - parse the user entered term we wish to search
		// not necessary for this service endpoint
		let term = document.querySelector("#searchterm").value.trim();
		term = encodeURIComponent(term);
		url+=term;
		displayTerm = term;
		// 4 - update the UI
		if (term.length < 1)
		{
			document.querySelector("#status").innerHTML = "Please insert a search term";
			return;
		}
		document.querySelector("#status").innerHTML = `<b>Querying a search for <i>"${term}"</i> with web service:</b> <a href="${url}" target="_blank">${url}</a>`;
		limit = document.querySelector("#limit").value;
		// 5 - create a new XHR object
		let xhr = new XMLHttpRequest();
	

		// 6 - set the onload handler
		xhr.onload = dataLoaded;
	
		// 7 - set the onerror handler
		xhr.onerror = dataError;

		// 8 - open connection and send the request
		xhr.open("GET",url);
		xhr.send();
	}
	
	function dataError(e){
		console.log("An error occurred");
		document.querySelector("#status").innerHTML = "<b>An error occurred</b>";
	}
	
	function dataLoaded(e){
		// 1 - e.target is the xhr object
		let xhr = e.target;
		document.querySelector("#status").innerHTML = "<b>Success!</b>";
		// 2 - xhr.responseText is the JSON file we just downloaded
		console.log(xhr.responseText);
	
		// 3 - turn the text into a parsable JavaScript object
		let obj = JSON.parse(xhr.responseText);
		if (!obj.amiibo || obj.amiibo.length == 0){
			let caseSense = "";
			if (query != "name"){
				caseSense = ". The amiibo series and source game searches are punctuation sensitive. Make sure to add any periods or symbols (i.e. 'super smash bros.' has a period, as does every other 'bros' series).";
			}
			document.querySelector("#status").innerHTML = "<b>No results found for '" + displayTerm + "'</b>" + caseSense;
			document.querySelector("#content").innerHTML = "";
            return;
        }
		
		// 4 - if there is an array of results, loop through them
		let results = obj.amiibo;
		let actualResults = results.length;
		if (actualResults > limit)
			actualResults = limit;
		let bigString = `<p><i>${actualResults} amiibo: </i></p>`;
		
		for (let i = 0; i < actualResults; i++){
			bigString += `<img src="${results[i].image}" title="${results[i].character}" />`;
		}

		// 5 - display final results to user
		document.querySelector("#content").innerHTML = bigString;
	}