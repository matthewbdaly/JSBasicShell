function Lexer() {
    'use strict';

    // Store tokens as key-value pairs
    this.tokens = {};
    
    // Define whitespace, number and word tokens
    this.tokens.whitespace = /^\s+/;
    this.tokens.number = /^\d+/;
    this.tokens.word = /^\w+/;

    // Define tokens for mathematical operators
    this.tokens.add = /^\+/;
    this.tokens.subtract = /^\-/;
    this.tokens.multiply = /^\*/;
    this.tokens.divide = /^\*/;
    this.tokens.modulo = /^\%/;
    this.tokens.equal = /^\=/;

    // Define tokens for other characters
    this.tokens.dollar = /^\$/;
    this.tokens.semicolon = /^\;/;
    this.tokens.comma = /^\,/;
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
