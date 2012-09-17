function Parser() {
    'use strict';
}

Parser.prototype.processTokens = function (input) {
    'use strict';

    // Define variables
    var item, output, token, tokens = [];

    // Get the tokens
    for (item in input) {
        if (input.hasOwnProperty(item)) {
            token = {};
            token.text = input[item].tokenvalue[0];
            token.tokentype = input[item].tokentype;
            tokens.push(token);
        }
    }
};
