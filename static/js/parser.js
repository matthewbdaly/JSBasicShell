// Constructor
function Parser() {
    'use strict';
}

// Process the tokens
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

        // Is the first element whitespace? If so, drop it
        if (programline[0].tokentype === "whitespace") {
            programline.shift();
        }

        // Same for the last element
        if (programline[(programline.length - 1)].tokentype === "whitespace") {
            programline.pop();
        }

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

    // If first token is a word, the shell is being used interactively
    if (tokens[0].tokentype === "word") {
        // Pass the tokens to the interpreter
        output = this.interpret(tokens);
    }

    // Return any output
    return output;
};

// Interpret a line of code
Parser.prototype.interpret = function (input) {
    'use strict';

    // First word should always be a keyword, so look up the appropriate one
    var first = input[0].tokenvalue.toLowerCase(), output;
    switch (first) {
    case 'print':
        output = this.print(input);
        break;
    default:
        output = this.throwSyntaxError(first);
    }

    // Return the output
    return output;
};

// Throw a syntax error
Parser.prototype.throwSyntaxError = function (input) {
    'use strict';

    return 'Syntax error';
};

// Print command
Parser.prototype.print = function (input) {
    'use strict';

    // Declare variables
    var countfrom, countto, output, printtext = "", quotetype, token;

    // First token will always be print, so remove it
    input.splice(0, 1);

    // Loop through the tokens
    for (token in input) {
        if (input.hasOwnProperty(token)) {

            // If there is any content after the closing quote, throw a syntax error
            if (countto > 0 && input[token].tokentype !== 'whitespace') {
                output = this.throwSyntaxError();
                return output;
            }

            // Look for text in quotes
            if (input[token].tokentype !== 'singlequotes' && input[token].tokentype !== 'doublequotes' && typeof countfrom === "number" && typeof countto !== "number") {
                printtext += input[token].tokenvalue;
            }

            // Look for the opening quote
            if (input[token].tokentype === 'singlequotes' || input[token].tokentype === 'doublequotes') {
                if (typeof countfrom === "number") {
                    countto = parseInt(token, 10);
                } else {
                    countfrom = parseInt(token, 10);
                }
            }
        }
    }

    // Return the value
    return printtext;
};
