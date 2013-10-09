

	var key = '0bd1d2d41d65047dadb0ce85c999d9cd';
	
	




function request(url, callback){
  var xhr = new XMLHttpRequest();xhr.onreadystatechange = (function(myxhr){
    return function() {
      callback(myxhr);
    }
  })(xhr);
  xhr.open('GET', url, true);
  xhr.send('');
}

// -----------------------


request("http://api.brewerydb.com/v2/?key=key",function(result) {
  
	console.log(result);
  var rawJson = result.response;
  var data = JSON.parse(rawJson);
});



