$(document).ready(function() {


	function addLeadingZero(baseString) {
	
		//Add leading zeros
		var hasLeadingZero = '0' + baseString;

		//Get last two characters
		var lastTwoChars = hasLeadingZero.substr(-2);

		return lastTwoChars;
	}

	//Every second
	setInterval(function() {


		//Get current Time
		var date = new Date ();

		var seconds = date.getSeconds();
		var minutes = date.getMinutes();

		var ms = date.getMilliseconds();

		// Add leading zeros
		var hasLeadingZeros = '00' + ms;

		// Get last 3 chars
		var lastThreeChars = hasLeadingZeros.substr(-3);
		
		//Update DOM element
		$('.hours').text(date.getHours());
		$('.minutes').text(addLeadingZero(minutes));
		$('.seconds').text(addLeadingZero(seconds));
		$('.milliseconds').text(lastThreeChars);

	}, 100);
});