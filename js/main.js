function ShellSession() {
    'use strict';

    // Create the prompt
    $('<span></span>', {
        'class': 'prompt',
        text: 'shellshocked $'
    }).appendTo('#content');

    // Create the text area
    $('<span></span>', {
        'class': 'buffer'
    }).insertAfter('.prompt');
}

ShellSession.prototype.echoText = function (event) {
    'use strict';

    // Prevent the default action
    event.preventDefault();

    // Define the variables used
    var newprompt, bufferbreak, lastbuffer, consoletext, keypressed, currenttext, keycode;

    // Get the key code
    keycode = event.which;

    // Capture characters
    switch (keycode) {
    case 8:
        // Delete pressed - delete the last character
        consoletext = $('.buffer').last().text();
        consoletext = consoletext.slice(0, (consoletext.length - 1));
        $('.buffer:last-of-type').text(consoletext);
        break;
    case 13:
        // Enter pressed - move to next line
        bufferbreak = $('<br />', {
        }).appendTo('.buffer:last-of-type');
        lastbuffer = $('.buffer').last().after('<br />');
        newprompt = $('<span></span>', {
            'class': 'prompt',
            text: 'shellshocked $'
        }).insertAfter(lastbuffer);
        $('<span></span>', {
            'class': 'buffer'
        }).insertAfter(newprompt);
        break;
    default:
        // Get the character from the key code
        keypressed = String.fromCharCode(keycode);
        currenttext = $('.buffer:last-of-type').text();
        $('.buffer:last-of-type').text(currenttext + keypressed);
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
