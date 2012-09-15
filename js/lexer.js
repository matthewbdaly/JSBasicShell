function Lexer() {
    'use strict';

    // Define the tokens to match
    // First get whitespace, number and word tokens
    this.WHITESPACE = /\s+/;
    this.NUMBER = /\d+/;
    this.WORD = /\w+/;

    // Define tokens for mathematical operators
    this.ADD = /\+/;
    this.SUBTRACT = /\-/;
    this.MULTIPLY = /\*/;
    this.DIVIDE = /\*/;
    this.MODULO = /\%/;
    this.EQUAL = /\=/;

    // Define tokens for other characters
    this.DOLLAR = /\$/;
    this.SEMICOLON = /\;/;
    this.COMMA = /\,/;
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
