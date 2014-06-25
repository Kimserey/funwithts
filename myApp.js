/// <reference path="jquery.d.ts" />
var ButtonShouter = (function () {
    function ButtonShouter(firstmessage, secondmessage, $el) {
        var _this = this;
        this.firstmessage = firstmessage;
        this.secondmessage = secondmessage;
        this.$el = $el;
        this.firstClick = function () {
            _this.$el.html(_this.firstmessage);
        };
        this.secondClick = function () {
            _this.$el.html(_this.secondmessage);
        };
    }
    return ButtonShouter;
})();

$(document).ready(function () {
    var shouter = new ButtonShouter('Hello from 1', 'Hello from 2', $('.my-div'));

    $('.first-button').click(shouter.firstClick);
    $('.second-button').click(shouter.secondClick);
});
