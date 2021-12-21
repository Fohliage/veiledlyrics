

(function () {
	"use strict";
	var numberBooks = 7;
	var indexCurrentViewing = 1;
	var indexLastViewing = 0;
	var timeBetweenFlips = 10000;

	for(var i = 1; i < numberBooks; i++) {
		document.getElementById("pub" + i).style.zIndex = -1;
		document.getElementById("pub" + i).style.display = "none";
	}
	window.setInterval(function(){
		indexLastViewing = indexCurrentViewing - 1;
		if(indexCurrentViewing === numberBooks) {
			indexCurrentViewing = 0;
		}
		document.getElementById("pub" + indexLastViewing).style.zIndex = -1;
		document.getElementById("pub" + indexLastViewing).style.display = "none";
		document.getElementById("pub" + indexCurrentViewing).style.zIndex = 1;      
		document.getElementById("pub" + indexCurrentViewing).style.display = "block";
		indexCurrentViewing++;
	}, timeBetweenFlips);
})();
