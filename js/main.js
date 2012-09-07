function ShellSession() {
    'use strict';

    // Create the prompt
    $('<span></span>', {
        'class': 'prompt',
        text: 'shellshocked $ '
    }).appendTo('#content');

    // Create the text area
    $('<span></span>', {
        'class': 'buffer'
    }).insertAfter('.prompt');

    // Create the history stack
    this.history = [];

    // Create a pointer for the history
    this.pointer = null;
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
            text: 'shellshocked $ '
        }).insertAfter(bufferbreak);

        // Place a new buffer after the prompt
        $('<span></span>', {
            'class': 'buffer'
        }).insertAfter(newprompt);
        break;
    case 38: // Move up through the history
        // Get the index for the history entry
        if (this.pointer === null) {
            this.pointer = this.history.length - 2;
        } else if (this.pointer > 0) {
            this.pointer = this.pointer - 1;
        }

        // Get this entry from the history
        currentbuffer = $('.buffer').last();
        $(currentbuffer).text(this.history[this.pointer]);

        break;
    case 40: // Move down through the history
        break;
    default:
        // Get the character from the key code
        keypressed = String.fromCharCode(keycode);

        // Convert it to lower case
        keypressed = keypressed.toLowerCase();

        // Write it to the buffer
        currentbuffer = $('.buffer').last();
        currenttext = currentbuffer.text();
        $(currentbuffer).text(currenttext + keypressed);
    }
};

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
    $(document).keyup(function (event) {
        shell.echoText(event);
    });
});
