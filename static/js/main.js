$(document).ready(function () {
    'use strict';

    // Disable the default behaviour for the backspace, tab, up arrow and down arrow keys
    $(document).on('keydown', function (e) {
        if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 38 || e.keyCode === 40) {
            return false;
        }
    });

    // Create a shell session object
    window.shell = new ShellSession();

    // Pass any keypress to the shell
    $(document).on('keypress', function (event) {
        window.shell.captureChar(event);
    });
    $(document).on('keyup', function (event) {
        window.shell.captureKey(event);
    });
});
