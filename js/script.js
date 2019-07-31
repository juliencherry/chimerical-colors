"use strict";

$(document).ready(function() {

	var rand = Math.floor((Math.random() * 3)); // [0, 2]
	var color;

	if (rand == 0) {
		color = "stygian blue";
	} else if (rand == 1) {
		color = "self-luminous red";
	} else {
		color = "hyperbolic orange";
	}

	document.title = color;

	if (color == "stygian blue") {
		$("main").attr("class", "grey");
		$("div").attr("class", "yellow");
	}
	else if (color == "self-luminous red") {
		$("main").attr("class", "grey");
		$("div").attr("class", "green");
	} else {
		$("main").attr("class", "grey");
		$("div").attr("class", "blue");
	}

	function change() {

		if (color == "stygian blue") {
			$("main").attr("class", "black");
			$("div").attr("class", "black");
		}
		else if (color == "self-luminous red") {
			$("main").attr("class", "white");
			$("div").attr("class", "white");
		} else {
			$("main").attr("class", "orange");
			$("div").attr("class", "orange");
		}
	}

	setTimeout(change, 30 * 1000);
});
