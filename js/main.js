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

    // Create the history stack
    this.history = [];
}

ShellSession.prototype.echoText = function (event) {
    'use strict';

    // Prevent the default action
    event.preventDefault();

    // Define the variables used
    var newprompt, bufferbreak, currentbuffer, consoletext, keypressed, currenttext, keycode;

    // Get the key code
    keycode = event.which;

    // Capture characters
    switch (keycode) {
    case 8: // Delete pressed - delete the last character
        consoletext = $('.buffer').last().text();
        consoletext = consoletext.slice(0, (consoletext.length - 1));
        $('.buffer:last-of-type').text(consoletext);
        break;
    case 13: // Enter pressed - move to next line
        // Get current buffer contents
        consoletext = $('.buffer:last-of-type').text();

        // Push the buffer contents to the history stack
        this.history.push(consoletext);

        // Place a break after the current buffer
        bufferbreak = $('<br />', {
        }).insertAfter('.buffer:last-of-type');

        // Place a new prompt after the break
        newprompt = $('<span></span>', {
            'class': 'prompt',
            text: 'shellshocked $'
        }).insertAfter(bufferbreak);

        // Place a new buffer after the prompt
        $('<span></span>', {
            'class': 'buffer'
        }).insertAfter(newprompt);
        break;
    default:
        // Get the character from the key code
        keypressed = String.fromCharCode(keycode);
        currentbuffer = $('.buffer').last();
        currenttext = currentbuffer.text();
        $(currentbuffer).text(currenttext + keypressed);
    }
};

$(document).ready(function () {
    'use strict';

    // Disable the default behaviour for the backspace key
    $(document).keydown(function (e) {
        if (e.keyCode === 8) {
            return false;
        }
    });

    // Create a shell session object
    var shell = new ShellSession();
    $(document).keyup(function (event) {
        shell.echoText(event);
    });
});
