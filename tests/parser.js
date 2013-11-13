describe("Test parser", function () {
    'use strict';

    // Test throwing a syntax error
    it("tests throwing a syntax error", function () {
        // Create parser
        var response, parser = new Parser();

        // Run the function
        response = parser.throwSyntaxError('blah');

        // Verify it
        expect(response).toBe('Syntax error');
    });
});
