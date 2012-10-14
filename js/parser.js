function Parser() {
    'use strict';
}

Parser.prototype.processTokens = function (input) {
    'use strict';

    // Define variables
    var item, output, token, tokens = [], program = [], programline;

    // Get the tokens
    for (item in input) {
        if (input.hasOwnProperty(item)) {
            token = {};
            token.tokenvalue = input[item].tokenvalue[0];
            token.tokentype = input[item].tokentype;
            tokens.push(token);
        }
    }

    // If first token is a number, this is a program being entered
    if (tokens[0].tokentype === "number") {
        programline = tokens.slice(1);
        program[tokens[0].tokenvalue] = programline;
    }
};
