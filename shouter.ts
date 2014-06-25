/// <reference path="typings/jquery.d.ts" />

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