function Parser() {
    'use strict';
}

Parser.prototype.processTokens = function (input) {
    'use strict';

    // Define variables
    var item, output, token, tokens = [], program = [], linenum, programline;

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
        linenum = tokens[0].tokenvalue;
        programline = tokens.slice(1);

        // Get any existing program from local storage
        this.program = JSON.parse(localStorage.getItem('program'));
        if (!this.program) {
            this.program = {};
            this.program.line = [];
        }

        // Add this line to it
        this.program.line[linenum] = programline;

        // Store it
        localStorage.setItem('program', JSON.stringify(this.program));
    }
};
