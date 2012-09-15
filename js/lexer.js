function Lexer() {
    'use strict';
}

Lexer.prototype.getTokens = function (input) {
    'use strict';

    // Define the variables
    var output;

    // Separate the input
    output = input.split(" ");

    // Return it
    return output;
}
