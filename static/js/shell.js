function ShellSession() {
    'use strict';

    // Define the loading message
    this.loadmessage = "JS Basic 1.0";

    // Define the prompt
    this.prompt = '> ';

    // Create the history stack
    this.history = [];

    // Create a pointer for the history
    this.pointer = null;

    // Render the content
    this.renderContent();
}

ShellSession.prototype.enter = function () {
    'use strict';

    // Reset the pointer
    this.pointer = null;

    // Declare variables
    var consoletext, bufferbreak, newprompt, lexer, output, outputtext, topbreak;

    // Get current buffer contents
    consoletext = $('.buffer:last-of-type').text();

    // Push the buffer contents to the history stack
    this.history.push(consoletext);

    // Pass any buffer contents to the lexer
    if (consoletext.length > 1) {
        lexer = new Lexer();
        output = lexer.getTokens(consoletext);
    }

    // If any output, insert it before the new prompt
    if (output) {
        // Display any output
        topbreak = $('<br />', {
        }).insertAfter('.buffer:last-of-type');
        outputtext = $('<span></span>', {
            text: output
        }).insertAfter(topbreak);
        bufferbreak = $('<br />', {
        }).insertAfter(outputtext);
    } else {
        // Just place a break after the current buffer
        bufferbreak = $('<br />', {
        }).insertAfter('.buffer:last-of-type');
    }

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
};

ShellSession.prototype.backspace = function () {
    'use strict';

    // Define the variables used
    var consoletext;

    // Delete the last character
    consoletext = $('.buffer').last().text();
    consoletext = consoletext.slice(0, (consoletext.length - 1));
    $('.buffer:last-of-type').text(consoletext);
};

ShellSession.prototype.backHistory = function (event) {
    'use strict';

    // Define the variables used
    var currentbuffer;

    // Get the index for the history entry
    if (this.pointer === null) {
        this.pointer = this.history.length - 1;
    } else if (this.pointer > 0) {
        this.pointer -= 1;
    }

    // Get this entry from the history
    currentbuffer = $('.buffer').last();
    $(currentbuffer).text(this.history[this.pointer]);
};

ShellSession.prototype.forwardHistory = function (event) {
    'use strict';

    // Define the variables used
    var currentbuffer;

    // If not at top of stack, increment the pointer
    if (this.pointer >= 0 && this.pointer < this.history.length) {
        this.pointer += 1;
    }

    // Get this entry from the history
    currentbuffer = $('.buffer').last();
    $(currentbuffer).text(this.history[this.pointer]);
};

ShellSession.prototype.echoText = function (keycode) {
    'use strict';

    // Define the variables used
    var keypressed, currentbuffer, currenttext;

    // Get the character from the key code
    keypressed = String.fromCharCode(keycode);

    // Write it to the buffer
    currentbuffer = $('.buffer').last();
    currenttext = currentbuffer.text();
    $(currentbuffer).text(currenttext + keypressed);
};

ShellSession.prototype.captureKey = function (event) {
    'use strict';

    // Prevent the default action
    event.preventDefault();

    // Define the variables used
    var keypressed, keycode;

    // Get the key code
    keycode = event.which;

    // Capture characters
    switch (keycode) {
    case 8: // Delete pressed - delete the last character
        this.backspace();
        break;
    case 13: // Enter pressed - move to next line
        this.enter();
        break;
    case 38: // Move back through the history
        this.backHistory();
        break;
    case 40: // Move forward through the history
        this.forwardHistory();
        break;
    default:
    }
};

ShellSession.prototype.captureChar = function (event) {
    'use strict';

    // Prevent the default action
    event.preventDefault();

    // Define the variables use
    var keypressed, keycode, s;

    // Get the key code
    keycode = event.which;

    // Display the character
    this.echoText(keycode);
}

ShellSession.prototype.renderContent = function () {
    'use strict';

    // Display the load message
    $('<p></p>', {
        text: this.loadmessage,
        'class': 'loadmessage'
    }).appendTo('#content');

    // Create the prompt
    $('<span></span>', {
        'class': 'prompt',
        text: this.prompt
    }).insertAfter('.loadmessage');

    // Create the text area
    $('<span></span>', {
        'class': 'buffer'
    }).insertAfter('.prompt');
}

ShellSession.prototype.clearScreen = function () {
    'use strict';

    // Empty the screen
    $('div#content').empty();

    // Render the content
    this.renderContent();
}
