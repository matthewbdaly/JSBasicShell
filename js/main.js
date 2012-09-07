$(document).ready(function () {
    'use strict';

    // Disable the default behaviour for the backspace, tab, up arrow and down arrow keys
    $(document).keydown(function (e) {
        if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 38 || e.keyCode === 40) {
            return false;
        }
    });

    // Create a shell session object
    var shell = new ShellSession();

    // Pass any keypresses to the shell
    $(document).keyup(function (event) {
        shell.echoText(event);
    });
});
