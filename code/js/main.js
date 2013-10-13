/*$document.ready(function(){

	var key = '0bd1d2d41d65047dadb0ce85c999d9cd';
	var url = 'http://api.brewerydb.com/v2/?key='+key;
	
	
	function request(url, callback){
		return function(){
			callback(JSON);
		}
	}




// function request(url, callback){
//   var xhr = new XMLHttpRequest();xhr.onreadystatechange = (function(myxhr){
//     return function() {
//       callback(myxhr);
//     }
//   })(xhr);
//   xhr.open('GET', url, true);
//   xhr.send('');
// }

// -----------------------


// request("http://api.brewerydb.com/v2/?key=key",function(result) {
  
// 	console.log(result);
//   var rawJson = result.response;
//   var data = JSON.parse(rawJson);
// });



)};*/

var overlay = document.getElementById('overlay');
var extrainfo = document.getElementById('extrainfo');

var grid = document.getElementsByClassName('grid');

for (var i = 0; i < grid.length; i++) {
	var s = grid.item(i);
	s.addEventListener('click', function(evt) {
		overlay.classList.remove('overlay-hidden');
		overlay.classList.add('overlay-visible');


		extrainfo.classList.remove('extrainfo-hidden');
		extrainfo.classList.add('extrainfo-visible');

		//Set position of extra information box
		var top = (this.offsetTop / window.innerHeight) * 100;
		var left = (this.offsetLeft / window.innerWidth) * 100;

		extrainfo.style.top = top + "%";
		extrainfo.style.left = left + "%";

		//Populate extra information box with specific info
		var innerInfo = this.querySelector('.beerinfo').innerHTML;
		extrainfo.innerHTML = innerInfo;
	});
}

overlay.addEventListener('click', function(evt) {
	overlay.classList.add('overlay-hidden');
	overlay.classList.remove('overlay-visible');

	extrainfo.classList.add('extrainfo-hidden');
	extrainfo.classList.remove('extrainfo-visible');
});

extrainfo.addEventListener('click', function(evt) {
	overlay.classList.add('overlay-hidden');
	overlay.classList.remove('overlay-visible');
	
	extrainfo.classList.add('extrainfo-hidden');
	extrainfo.classList.remove('extrainfo-visible');
});


