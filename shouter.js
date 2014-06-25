/// <reference path="typings/jquery.d.ts" />
var ButtonShouter = (function () {
    function ButtonShouter(firstmessage, secondmessage, $el) {
        var _this = this;
        this.firstmessage = firstmessage;
        this.secondmessage = secondmessage;
        this.$el = $el;
        // () => void
        // Type of a function with no argument wich return void
        this.firstClick = function () {
            _this.$el.html(_this.firstmessage);
        };
        this.secondClick = function () {
            _this.$el.html(_this.secondmessage);
        };
    }
    return ButtonShouter;
})();
