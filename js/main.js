function ShellSession() {
}

ShellSession.prototype.echoText = function(event) {
    // Prevent the default action
    event.preventDefault();

    // Get the key code
    var keycode = event.which;

    // Capture characters
    switch(keycode) {
        case 8:
            // Delete pressed - delete the last character
            var consoletext = $('#prompt').text();
            consoletext = consoletext.slice(0, (consoletext.length - 1));
            $('#prompt').text(consoletext);
            break;
        default:
            // Get the character from the key code
            var keypressed = String.fromCharCode(keycode);
            var currenttext = $('#prompt').text();
            $('#prompt').text(currenttext+keypressed);
    }
}

$(document).ready(function() {
    // Create a shell session object
    var shell = new ShellSession();
    $(document).keyup(function(event){
        shell.echoText(event);
    });
});
