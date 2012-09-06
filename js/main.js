function ShellSession() {
}

ShellSession.prototype.echoText = function(event) {
    // Prevent the default action
    event.preventDefault();

    // Get the character from the key code
    keypressed = String.fromCharCode(event.which);
    var currenttext = $('#prompt').text();
    $('#prompt').text(currenttext+keypressed);
}

$(document).ready(function() {
    // Create a shell session object
    var shell = new ShellSession();
    $(document).keypress(function(event){
        shell.echoText(event);
    });
});
