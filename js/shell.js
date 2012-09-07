function ShellSession() {
    'use strict';

    // Define the prompt
    this.prompt = 'shellshocked user $ ';

    // Create the history stack
    this.history = [];

    // Create a pointer for the history
    this.pointer = null;

    // Create the prompt
    $('<span></span>', {
        'class': 'prompt',
        text: this.prompt
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
        // Reset the pointer
        this.pointer = null;

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
            text: this.prompt
        }).insertAfter(bufferbreak);

        // Place a new buffer after the prompt
        $('<span></span>', {
            'class': 'buffer'
        }).insertAfter(newprompt);

        // Scroll user down
        $('html, body').animate({scrollTop: $(document).height() }, 'fast');
        break;
    case 38: // Move back through the history
        // Get the index for the history entry
        if (this.pointer === null) {
            this.pointer = this.history.length - 1;
        } else if (this.pointer > 0) {
            this.pointer -= 1;
        }

        // Get this entry from the history
        currentbuffer = $('.buffer').last();
        $(currentbuffer).text(this.history[this.pointer]);

        break;
    case 40: // Move forward through the history
        if (this.pointer >= 0 && this.pointer < this.history.length) {
            this.pointer += 1;
        }

        // Get this entry from the history
        currentbuffer = $('.buffer').last();
        $(currentbuffer).text(this.history[this.pointer]);

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
