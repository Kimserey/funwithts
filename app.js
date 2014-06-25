/// <reference path="shouter.ts" />
$(document).ready(function () {
    var shouter = new ButtonShouter('HEY from 1', 'WOH from 2', $('.my-div'));

    $('.first-button').click(shouter.firstClick);
    $('.second-button').click(shouter.secondClick);
});
