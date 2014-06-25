/// <reference path="jquery.d.ts" />

class ButtonShouter {
	constructor(
		private firstmessage: string,
		private secondmessage: string,
		private $el) {
	}

	// () => void
	// Type of a function with no argument wich return void
	firstClick: () => void = () => {
		this.$el.html(this.firstmessage);
	}

	secondClick: () => void = () => {
		this.$el.html(this.secondmessage);
	}
}

$(document).ready(function() {
	var shouter = new ButtonShouter(
		'Hello from 1', 
		'Hello from 2', 
		$('.my-div'));

	$('.first-button').click(shouter.firstClick);
	$('.second-button').click(shouter.secondClick);
});