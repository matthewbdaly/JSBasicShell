function ShellSession() {
    'use strict';
}

ShellSession.prototype.echoText = function (event) {
    'use strict';

    // Prevent the default action
    event.preventDefault();

    // Define the variables used
    var consoletext, keypressed, currenttext, keycode;

    // Get the key code
    keycode = event.which;

    // Capture characters
    switch (keycode) {
    case 8:
        // Delete pressed - delete the last character
        consoletext = $('#prompt').text();
        consoletext = consoletext.slice(0, (consoletext.length - 1));
        $('#prompt').text(consoletext);
        break;
    case 13:
        // Enter pressed - move to next line
        $('#prompt').after('<br /><span>shellshocked$ </span>');
        break;
    default:
        // Get the character from the key code
        keypressed = String.fromCharCode(keycode);
        currenttext = $('#prompt').text();
        $('#prompt').text(currenttext + keypressed);
    }
};

$(document).ready(function () {
    'use strict';
    // Create a shell session object
    var shell = new ShellSession();
    $(document).keyup(function (event) {
        shell.echoText(event);
    });
});
