/// <reference path="jquery.d.ts" />

class Greeter {
	constructor(public greeting: string) { }
	greet() {
		return '<h1>' + this.greeting + '</h1>';
	}
}

var greeter = new Greeter('Hello');
var html = greeter.greet();

$(document).ready(function() {
	document.body.innerHTML = html;
});
