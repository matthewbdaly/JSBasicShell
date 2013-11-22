function Lexer() {
    'use strict';

    // Store tokens as key-value pairs
    this.tokens = {};

    // Define whitespace, number and word tokens
    this.tokens.whitespace = new RegExp(/^\s+/);
    this.tokens.number = new RegExp(/^\d+/);
    this.tokens.word = new RegExp(/^[a-zA-Z]+/);

    // Define tokens for mathematical operators
    this.tokens.add = new RegExp(/^\+/);
    this.tokens.subtract = new RegExp(/^\-/);
    this.tokens.multiply = new RegExp(/^\*/);
    this.tokens.divide = new RegExp(/^\//);
    this.tokens.modulo = new RegExp(/^\%/);
    this.tokens.equal = new RegExp(/^\=/);
    this.tokens.leftbracket = new RegExp(/^\(/);
    this.tokens.rightbracket = new RegExp(/^\)/);
    this.tokens.lt = new RegExp(/^</);
    this.tokens.gt = new RegExp(/^>/);

    // Define tokens for other characters
    this.tokens.dollar = new RegExp(/^\$/);
    this.tokens.semicolon = new RegExp(/^\;/);
    this.tokens.comma = new RegExp(/^\,/);
    this.tokens.singlequotes = new RegExp(/^\'/);
    this.tokens.doublequotes = new RegExp(/^\"/);
    this.tokens.hash = new RegExp(/^\#/);
    this.tokens.bang = new RegExp(/^\!/);
    this.tokens.amp = new RegExp(/^\&/);
    this.tokens.pipe = new RegExp(/^\|/);
    this.tokens.tilde = new RegExp(/^\~/);
    this.tokens.backslash = new RegExp(/^\\/);
    this.tokens.dot = new RegExp(/^\./);
    this.tokens.colon = new RegExp(/^\:/);

    // Define tokens for undefined characters
    this.tokens.unwanted = new RegExp(/^[\{\}\[\]\?\±\§]+/);
}

Lexer.prototype.identifyTokens = function (input) {
    'use strict';

    // Define the variables
    var key, match, pattern, test, newtoken = {}, result = {};

    // Loop through the tokens and get the one that matches
    if (input.length > 0) {
        for (key in this.tokens) {
            if (this.tokens.hasOwnProperty(key)) {
                pattern = this.tokens[key];
                test = pattern.test(input);
                if (test) {
                    // Found a token
                    match = pattern.exec(input);
                    input = input.replace(match, '');
                    newtoken.tokentype = key;
                    newtoken.tokenvalue = match;
                    result.newtoken = newtoken;
                    result.input = input;
                    return result;
                }
            }
        }
    } else {
        return null;
    }
};

Lexer.prototype.getTokens = function (input) {
    'use strict';

    // Define the variables
    var output, tokens = [], newtoken, result, parser;

    // Parse the tokens
    while (input.length > 0) {
        result = this.identifyTokens(input);
        if (result) {
            newtoken = result.newtoken;
            input = result.input;
        } else {
            newtoken = null;
        }
        if (newtoken !== null) {
            tokens.push(newtoken);
        }
    }

    // Send it to the parser
    parser = new Parser();
    output = parser.processTokens(tokens);
    return output;
};
